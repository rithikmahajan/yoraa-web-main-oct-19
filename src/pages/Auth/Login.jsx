import { useState } from "react";
import eyeLogo from "../../assets/eye.png";
import googleLogo from "../../assets/google.png";
import appleLogo from "../../assets/apple.png";
import { Link, useNavigate } from "react-router";
import { loginWithEmail, signInWithGoogle, signInWithApple } from "../../services/authService";
import { handleApiError } from "../../services/api";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeOption, setActiveOption] = useState("email");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Form data
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const result = await loginWithEmail({
        email: formData.email,
        password: formData.password
      });

      console.log("Login successful:", result);
      
      // Navigate to home page
      navigate("/");
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const result = await signInWithGoogle();
      console.log("Google sign-in successful:", result);
      
      // Navigate to home page
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
      
      // Navigate to home page
      navigate("/");
    } catch (err) {
      console.error("Apple sign-in error:", err);
      setError(err.message || "Apple sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 py-16">
      <div className="w-2/6 rounded-xl bg-white shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-6">
      <p className=" font-light text-end text-sm">SKIP</p>
        
        <h1 className=" font-bold text-2xl text-center my-4">Log into your account</h1>

        <div className="flex justify-end text-xs my-3 mx-3">
          <button
            onClick={() => {
              navigate("/login-phone")
              setActiveOption("phone")}}
            className={`
              relative flex items-center space-x-2 pl-4 pr-5 py-2 rounded-full transition-all duration-300 ease-in-out
              ${
                activeOption === "phone"
                  ? "text-white bg-black shadow-md border-2 border-black z-20"
                  : "text-gray-600 border hover:text-gray-800 z-10"
              }
            `}
          >
            <span className="font-medium">Phone</span>
          </button>
          <button
            onClick={() => setActiveOption("email")}
            className={`
              relative flex items-center pl-5 pr-4 py-2 rounded-full transition-all duration-300 ease-in-out -ml-[19px]
              ${
                activeOption === "email"
                  ? "text-white bg-black shadow-md border-2 border-black z-20"
                  : "text-gray-600 border hover:text-gray-800 z-10"
              }
            `}
          >
            <span className="font-medium">Email</span>
          </button>
        </div>

        <form onSubmit={handleEmailLogin} className="flex flex-col justify-center mt-5 mx-10 gap-3">
          <input
            className="px-2 py-1 rounded-lg border-2 border-black"
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={loading}
            required
          />
          <div className="relative">
            <input
              className="px-2 py-1 pr-10 rounded-lg border-2 border-black w-full"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              disabled={loading}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
              disabled={loading}
            >
              <img
                src={eyeLogo}
                alt="toggle password visibility"
                className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity"
              />
            </button>
          </div>
          
          <Link to="/forgot-password">
            <p className="text-end text-black text-xs hover:underline">
              Forgot Password?
            </p>
          </Link>

          {error && (
            <div className="px-4 py-3 bg-red-100 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button 
            type="submit"
            disabled={loading}
            className="px-8 py-3 mt-3 mx-6 text-center font-semibold text-sm rounded-3xl shadow-md text-white bg-black hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? "LOGGING IN..." : "LOGIN"}
          </button>
          
          <p className="text-xs text-gray-500 text-center">
            Don't have an account?
            <Link to={"/signup"}>
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

export default Login;