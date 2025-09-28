import React from 'react';

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
    {children}
  </div>
);

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. What does this Privacy Notice tell you?",
      content: 'This Privacy Notice tells you how we collect and process the information from which you can be identified directly or indirectly and including any Personal Sensitive Data ("Personal Data") while you browse www.Yoraa.co.in as well as when you interact with our different platforms, portals and applications using your Personal Data, including the Yoraa app.'
    },
    {
      title: "2. Who is responsible for your Personal Data?",
      content: "Yora entity responsible for protecting your Personal Data and complying with applicable national legislation governing the use of your Personal Data is: Yora apparels Private Limited |Registered Office: WeWork DLF Forum, Cybercity, Phase III, Gurugram, Haryana 122002"
    },
    {
      title: "3. How do you get in touch with the Grievance Officer of Yora in India?",
      content: (
        <div className="space-y-2">
          <p>Please email at: support@Yoraa.co.in</p>
          <p>Registered Office: WeWork DLF Forum, Cybercity, Phase III, Gurugram, Haryana 122002</p>
          <p>Grievance Officer:</p>
          <p>Name: Rithik Mahajan</p>
          <p>Designation: Digital Brand Commerce Director</p>
          <p>Address: WeWork DLF Forum, Cybercity, Phase III, Gurugram, Haryana 122002</p>
          <p>Email: support@Yoraa.co.in</p>
        </div>
      )
    },
    {
      title: "4. What Personal Data does Yora collect and use?",
      content: (
        <div className="space-y-4">
          <p>These are the categories of Personal Data we collect directly or indirectly from you:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li><span className="font-semibold">Identity information</span> – includes: name [first, last, initials], Date of Birth, e-mail address, unique consumer identifier number, nickname, password, social media identifiers.</li>
            <li><span className="font-semibold">Contact information</span> – includes: your phone number, shipping and billing address, e-mail address, Messenger ID, social media handle.</li>
            <li><span className="font-semibold">Location information</span> – includes: your residential location, current log-in location [IP address], GPS location.</li>
            <li><span className="font-semibold">Size information</span> – includes: clothes size, height, weight, chest, waist, hip, inseam, body shape, heel-toe measurement.</li>
            <li><span className="font-semibold">Purchase information</span> – includes: payment information, Bank Account details, shopping cart, delivery details.</li>
            <li><span className="font-semibold">Behavioural and Profile information</span> – includes: shopping history, Wishlist items, browsing behaviour.</li>
          </ul>
        </div>
      )
    },
    {
      title: "5. What does Yora do with your Personal Data?",
      content: (
        <div className="space-y-4">
          <p>Your Personal Data is used for the following purposes:</p>
          <ul className="list-decimal pl-6 space-y-2">
            <li>Site (www.Yoraa.co.in) operation and app operation</li>
            <li>Domain and network security and user authentication</li>
            <li>Global credential to all Yora platforms – user experience</li>
            <li>Sales of Yora products - online and off-line order</li>
            <li>Payment fraud detection</li>
            <li>Product delivery, return and refund</li>
            <li>Electronic delivery tracking</li>
            <li>Business operational analytics</li>
            <li>Customer service</li>
            <li>Personalised marketing messages</li>
          </ul>
        </div>
      )
    },
    {
      title: "6. What does Yora do when we transfer your Personal Data outside of India?",
      content: "Depending on the Personal Data processing activity, your Personal Data is shared with different Yora entities, affiliates, couriering agencies, agents and third parties located in different countries. We comply with all local legal requirements to ensure your Personal Data is secured and safe when it is being transferred to a different country."
    },
    {
      title: "7. How do we secure your Personal Data?",
      content: "We implement appropriate managerial, technical, operational, physical, and organisational measures as per applicable laws and regulations to address the risks corresponding to our use of your Personal Data, including loss, alteration, or unauthorised access to your Personal Data."
    },
    {
      title: "8. What are your rights and how can you exercise them?",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>You have the right to make sure we are using the accurate details about you and you may request to review and correct any inaccurate Personal Data we have of you.</li>
          <li>When we use your Personal Data based on your consent, you have the right to withdraw your consent at any time by writing to us.</li>
          <li>In the event that you withdraw consent given earlier we have no obligation to provide goods or services for which the said information was sought.</li>
          <li>You have the right to raise any discrepancies or grievances with respect to processing of information by contacting our Grievance Officer.</li>
        </ul>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Privacy Policy</h1>
      
      <div className="space-y-6">
        {sections.map((section, index) => (
          <Card key={index}>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              {section.title}
            </h2>
            <div className="text-gray-600 leading-relaxed">
              {section.content}
            </div>
          </Card>
        ))}
        
        <Card>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Updates and Notification of Updates
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We review and update the Privacy Policy periodically to reflect any changes resulting from our day-to-day business operations. You can always check the date of the Privacy Policy to find out when we last made any changes.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;