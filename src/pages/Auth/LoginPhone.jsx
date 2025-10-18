import { useState, useRef } from "react";
import googleLogo from "../../assets/google.png";
import appleLogo from "../../assets/apple.png";
import indiaLogo from "../../assets/india.png";
import { Link, useNavigate } from "react-router";
import { signInWithGoogle, signInWithApple } from "../../services/authService";
import { auth } from "../../firebase/FirebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const LoginPhone = () => {
  const [activeOption, setActiveOption] = useState("phone");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [timer, setTimer] = useState(0);
  
  const inputRefs = useRef([]);
  const recaptchaVerifier = useRef(null);

  const navigate = useNavigate();

  // Setup reCAPTCHA
  const setupRecaptcha = () => {
    if (!recaptchaVerifier.current) {
      recaptchaVerifier.current = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: () => {
          console.log("reCAPTCHA verified");
        }
      });
    }
  };

  // Start timer for resend OTP
  const startTimer = () => {
    setTimer(60);
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    
    if (!phone || phone.length < 10) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      setupRecaptcha();
      const phoneNumber = `+91${phone}`;
      const confirmation = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier.current);
      
      setConfirmationResult(confirmation);
      setOtpSent(true);
      startTimer();
      console.log("OTP sent successfully");
    } catch (err) {
      console.error("Send OTP error:", err);
      
      // Better error messages
      let errorMessage = "Failed to send OTP. Please try again.";
      
      if (err.code === 'auth/invalid-phone-number') {
        errorMessage = "Invalid phone number format.";
      } else if (err.code === 'auth/quota-exceeded') {
        errorMessage = "SMS quota exceeded. Please try again later.";
      } else if (err.code === 'auth/operation-not-allowed') {
        errorMessage = "Phone authentication is not enabled. Please contact support.";
      } else if (err.code === 'auth/too-many-requests') {
        errorMessage = "Too many attempts. Please try again later.";
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    
    const otpCode = otp.join("");
    if (otpCode.length !== 6) {
      setError("Please enter the complete 6-digit OTP");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const result = await confirmationResult.confirm(otpCode);
      console.log("Phone login successful:", result.user);
      
      // Get Firebase token and send to backend
      const firebaseToken = await result.user.getIdToken();
      
      // TODO: Send to your backend API for verification and user creation
      // const response = await authAPI.loginWithPhone({
      //   phone: result.user.phoneNumber,
      //   firebaseToken,
      //   firebaseUid: result.user.uid
      // });
      
      navigate("/");
    } catch (err) {
      console.error("Verify OTP error:", err);
      setError(err.message || "Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (timer > 0) return;
    
    setOtp(["", "", "", "", "", ""]);
    setError(null);
    await handleSendOTP({ preventDefault: () => {} });
  };

  const handleOtpChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handleInputChange = (e) => {
    setPhone(e.target.value.replace(/\D/g, "").slice(0, 10));
    if (error) setError(null);
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await signInWithGoogle();
      console.log("Google sign-in successful:", result);
      navigate("/");
    } catch (err) {
      console.error("Google sign-in error:", err);
      setError(err.message || "Google sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  const handleAppleSignIn = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await signInWithApple();
      console.log("Apple sign-in successful:", result);
      navigate("/");
    } catch (err) {
      console.error("Apple sign-in error:", err);
      
      // Better error messages for Apple Sign-In
      let errorMessage = "Apple sign-in failed. ";
      if (err.code === 'auth/operation-not-allowed') {
        errorMessage = "Apple Sign-In is not properly configured. Please ensure it's enabled in Firebase Console and has the required Service ID configured.";
      } else if (err.code === 'auth/unauthorized-domain') {
        errorMessage = "This domain is not authorized for Apple Sign-In. Please add it in Firebase Console.";
      } else if (err.code === 'auth/popup-closed-by-user') {
        errorMessage = "Apple Sign-In was cancelled.";
      } else if (err.message) {
        errorMessage += err.message;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 py-16">
      <div className="w-2/6 rounded-xl bg-white shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-6">
        <p className="font-light text-end text-sm">SKIP</p>

        <h1 className="font-bold text-2xl text-center my-4">
          Log into your account
        </h1>

        <div className="flex justify-end text-xs my-3 mx-3">
          <button
            onClick={() => setActiveOption("phone")}
            className={`relative flex items-center space-x-2 pl-4 pr-5 py-2 rounded-full transition-all duration-300 ease-in-out ${
              activeOption === "phone"
                ? "text-white bg-black shadow-md border-2 border-black z-20"
                : "text-gray-600 border hover:text-gray-800 z-10"
            }`}
          >
            <span className="font-medium">Phone</span>
          </button>
          <button
            onClick={() => {
              navigate("/login");
              setActiveOption("email");
            }}
            className={`relative flex items-center pl-5 pr-4 py-2 rounded-full transition-all duration-300 ease-in-out -ml-[19px] ${
              activeOption === "email"
                ? "text-white bg-black shadow-md border-2 border-black z-20"
                : "text-gray-600 border hover:text-gray-800 z-10"
            }`}
          >
            <span className="font-medium">Email</span>
          </button>
        </div>

        <form onSubmit={otpSent ? handleVerifyOTP : handleSendOTP} className="flex flex-col justify-center mt-5 mx-10 gap-3">
          <div className="text-sm gap-1 mx-3 rounded-lg flex py-2 items-center justify-center bg-[#FAFAFA] border border-[#EEEEEE]">
            <div>
              <img src={indiaLogo} alt="indiaLogo" />
            </div>
            <p className="font-semibold">+91</p>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="#848688" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="2" height="34" viewBox="0 0 2 34" fill="none">
                <path d="M1 0L1 34" stroke="#E9E9E9"/>
              </svg>
            </div>
            <input 
              placeholder="Enter phone number"
              name="phone"
              type="tel"
              value={phone}
              onChange={handleInputChange}
              disabled={loading || otpSent}
              maxLength="10"
              className="bg-[#FAFAFA] outline-none flex-1"
              required
            />
          </div>

          {otpSent && (
            <>
              <p className="text-gray-500 text-xs text-center mt-2">
                Please enter the verification code we sent to +91 {phone}
              </p>

              <div className="flex justify-center gap-2 mt-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="w-10 h-10 text-center text-lg font-bold border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none"
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    disabled={loading}
                  />
                ))}
              </div>

              <p className="text-[#12142080] text-xs text-center">
                {timer > 0 ? (
                  <>Resend in <span className="font-medium">00:{timer.toString().padStart(2, '0')}</span></>
                ) : (
                  <button 
                    type="button" 
                    onClick={handleResendOTP}
                    className="text-black underline font-medium"
                    disabled={loading}
                  >
                    Resend OTP
                  </button>
                )}
              </p>
            </>
          )}

          {error && (
            <div className="px-4 py-3 mx-3 bg-red-100 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div id="recaptcha-container"></div>

          <button 
            type="submit"
            disabled={loading}
            className="px-8 py-3 mt-3 mx-6 text-center font-semibold text-sm rounded-3xl shadow-md text-white bg-black hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? "PROCESSING..." : otpSent ? "VERIFY OTP" : "SEND OTP"}
          </button>
          
          <p className="text-xs text-gray-500 text-center">
            Don&apos;t have an account?
            <Link to={"/signup-phone"}>
              <span className="underline text-center text-black ml-1 hover:text-gray-700">Sign Up</span>
            </Link>
          </p>
          
          <button 
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="text-sm gap-2 mx-10 rounded-lg flex py-2 items-center justify-center bg-[#FAFAFA] border border-[#EEEEEE] hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <img src={googleLogo} alt="googleLogo" />
            Sign In with Google
          </button>
          
          <button 
            type="button"
            onClick={handleAppleSignIn}
            disabled={loading}
            className="text-sm gap-2 mx-10 mb-12 rounded-lg flex py-2 items-center justify-center bg-[#FAFAFA] border border-[#EEEEEE] hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <img src={appleLogo} alt="appleLogo" />
            Sign In with Apple
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPhone;
