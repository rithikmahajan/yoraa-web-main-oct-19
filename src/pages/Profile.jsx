import React, { useState } from 'react';
import nikeimg from "../assets/Nike.png";
import nikeShoeimg from "../assets/NikeShoe.png";
import salepic from "../assets/salepic.png";

const Profile = () => {
  const [activeTab, setActiveTab] = useState('Profile');

  const tabs = ['Profile', 'Orders', 'Favourite', 'Inbox', 'Setting'];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Profile':
        return <ProfileContent />;
      case 'Orders':
        return <OrdersContent />;
      case 'Favourite':
        return <FavouriteContent />;
      case 'Inbox':
        return <InboxContent />;
      case 'Setting':
        return <SettingContent />;
      default:
        return <ProfileContent />;
    }
  };

  return (
    <div className="max-h-full w-full relative z-0">
      {/* Main Container with Shadow */}
      <div className="max-w-6xl mx-auto bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-lg p-8 m-8 min-h-[600px]">
        
        {/* Tab Navigation */}
        <div className="flex justify-center gap-8 mb-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 text-lg font-medium transition-colors ${
                activeTab === tab
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </div>
  );
};

// Profile Tab Content
const ProfileContent = () => {
  return (
    <div>
      {/* Profile Header Section */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-2">Rithik27</h1>
          <p className="text-gray-600 mb-4">Profile Display</p>
          <p className="text-gray-700 font-medium">Member since</p>
          <p className="text-gray-700 font-medium">1998</p>
        </div>
        <button className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
          Edit
        </button>
      </div>

      {/* Browse All Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-medium">Browse All</h2>
          <div className="flex gap-2">
            <button className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15.5256 18.966L8.55859 12L15.5256 5.03296" stroke="#9E9EA0" strokeWidth="1.5" />
              </svg>
            </button>
            <button className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8.47461 18.966L15.4406 12L8.47461 5.03296" stroke="#9E9EA0" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="flex justify-center gap-4">
          <div className="w-[29%] flex flex-col gap-4">
            <img className="w-full" src={nikeimg} alt="nikeimg" />
            <p>e Court</p>
          </div>
          <div className="w-[29%] flex flex-col gap-4">
            <img className="w-full" src={nikeimg} alt="nikeimg" />
            <p>Nike Mercurial Vapor 16 Elite x Air Max 95 SE</p>
          </div>
          <div className="w-[29%] flex flex-col gap-4">
            <img className="w-full" src={nikeimg} alt="nikeimg" />
            <p>Shox TL</p>
          </div>
        </div>
      </div>

      {/* Trending Now Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-medium">Trending Now</h2>
          <div className="flex gap-2">
            <button className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15.5256 18.966L8.55859 12L15.5256 5.03296" stroke="#9E9EA0" strokeWidth="1.5" />
              </svg>
            </button>
            <button className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8.47461 18.966L15.4406 12L8.47461 5.03296" stroke="#9E9EA0" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="flex justify-center gap-4">
          <ProductCard title="Women's Air Max 1 '86 Original" price="Rs 2000" />
          <ProductCard title="Women's Air Max 1 '86 Original" price="Rs 2000" />
          <ProductCard title="Women's Air Max 1 '86 Original" price="Rs 2000" />
        </div>
      </div>

      {/* Featured Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-medium">Featured</h2>
          <div className="flex gap-2">
            <button className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15.5256 18.966L8.55859 12L15.5256 5.03296" stroke="#9E9EA0" strokeWidth="1.5" />
              </svg>
            </button>
            <button className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8.47461 18.966L15.4406 12L8.47461 5.03296" stroke="#9E9EA0" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

// Orders Tab Content
const OrdersContent = () => {
  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold mb-8 text-left">Orders</h2>
      <div className="flex flex-col items-center justify-center h-64">
        <p className="text-gray-500 text-lg">You Dont Have any orders yet.</p>
      </div>
    </div>
  );
};

// Favourite Tab Content
const FavouriteContent = () => {
  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold mb-8 text-left">Favourites</h2>
      <div className="flex flex-col items-center justify-center h-64">
        <p className="text-gray-500 text-lg">Items need to be added to favourites to be saved here</p>
      </div>
    </div>
  );
};

// Inbox Tab Content
const InboxContent = () => {
  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold mb-8">Inbox</h2>
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-700 font-medium mb-2">Manage account and services linked to your Yoraa account</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-700 font-medium mb-1">Manage account and services linked to your Yoraa</p>
          <p className="text-gray-700 font-medium">account</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-700 font-medium mb-1">Manage account and services linked</p>
          <p className="text-gray-700 font-medium">to your Yoraa account</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-700 font-medium mb-1">Manage account and services linked</p>
          <p className="text-gray-700 font-medium">to your Yoraa account</p>
        </div>
      </div>
    </div>
  );
};

// Setting Tab Content
const SettingContent = () => {
  const [activeSettingPage, setActiveSettingPage] = useState('Account Details');

  const settingPages = [
    'Account Details',
    'Delivery addresses',
    'Shop Preferences',
    'Communication preferences',
    'Profile visibility',
    'Linked accounts',
    'Language and region',
    'Delete account'
  ];

  const renderSettingPage = () => {
    switch (activeSettingPage) {
      case 'Account Details':
        return <AccountDetailsPage />;
      case 'Delivery addresses':
        return <DeliveryAddressesPage />;
      case 'Shop Preferences':
        return <ShopPreferencesPage />;
      case 'Communication preferences':
        return <CommunicationPreferencesPage />;
      case 'Profile visibility':
        return <ProfileVisibilityPage />;
      case 'Linked accounts':
        return <LinkedAccountsPage />;
      case 'Language and region':
        return <LanguageRegionPage />;
      case 'Delete account':
        return <DeleteAccountPage />;
      default:
        return <AccountDetailsPage />;
    }
  };

  return (
    <div className="flex gap-8 py-4">
      {/* Left Navigation */}
      <div className="w-1/3 space-y-2">
        {settingPages.map((page) => (
          <button
            key={page}
            onClick={() => setActiveSettingPage(page)}
            className={`w-full text-left py-3 px-4 rounded transition-colors ${
              activeSettingPage === page
                ? 'bg-gray-100 font-medium text-black'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Right Content */}
      <div className="flex-1">
        {renderSettingPage()}
      </div>
    </div>
  );
};

// Account Details Page
const AccountDetailsPage = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">What's your contact information?</h2>
      
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            <p className="text-xs text-gray-500 mt-1">A confirmation email will be sent after checkout.</p>
          </div>
          <div className="flex-1">
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            <p className="text-xs text-gray-500 mt-1">A carrier might contact you to confirm delivery.</p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Password</label>
          <div className="flex items-center gap-2">
            <span className="text-lg">••••••••</span>
            <button className="text-sm text-gray-600 underline">Edit</button>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm font-medium">Other Details</label>
            <button className="text-sm text-gray-600">+ Add</button>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-xs text-gray-500 mb-1">Date of Birth</label>
              <input
                type="date"
                defaultValue="1998-09-28"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs text-gray-500 mb-1">Gender</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Enter your name and address:</h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="px-3 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="px-3 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Address"
              className="px-3 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Apartment,suit"
              className="px-3 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="City"
              className="px-3 py-2 border border-gray-300 rounded-md"
            />
            <select className="px-3 py-2 border border-gray-300 rounded-md">
              <option>Delhi</option>
            </select>
            <input
              type="text"
              placeholder="PIN"
              className="px-3 py-2 border border-gray-300 rounded-md bg-red-50"
            />
            <input
              type="text"
              placeholder="Country"
              className="px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Billing address</h3>
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked />
            <span className="text-sm">Same as delivery address</span>
          </label>
        </div>

        <button className="w-full max-w-xs bg-black text-white py-3 rounded-full font-medium">
          Save
        </button>
      </div>
    </div>
  );
};

// Delivery Addresses Page
const DeliveryAddressesPage = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Saved Delivery Address</h2>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-4 flex justify-between items-start">
        <div>
          <p className="font-medium">John Smith</p>
          <p className="text-sm text-gray-600">2950 S 108th St</p>
          <p className="text-sm text-gray-600">53227, West Allis, US</p>
          <p className="text-sm text-gray-600">john@mail.com</p>
        </div>
        <button className="text-sm text-gray-600 underline">Edit</button>
      </div>

      <button className="bg-black text-white px-6 py-2 rounded-full">
        Add Address
      </button>
    </div>
  );
};

// Shop Preferences Page
const ShopPreferencesPage = () => {
  const [selectedGender, setSelectedGender] = useState('Women');
  const [additionalPrefs, setAdditionalPrefs] = useState({
    Boy: true,
    Mens: true,
    Girls: true
  });

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Shopping Preferences</h2>
      
      <div className="mb-6">
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              checked={selectedGender === 'Women'}
              onChange={() => setSelectedGender('Women')}
            />
            <span>Women</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              checked={selectedGender === 'Men'}
              onChange={() => setSelectedGender('Men')}
            />
            <span>Men</span>
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-3">Additional preferences</h3>
        <div className="space-y-2">
          {Object.entries(additionalPrefs).map(([pref, checked]) => (
            <label key={pref} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setAdditionalPrefs(prev => ({
                  ...prev,
                  [pref]: e.target.checked
                }))}
              />
              <span>{pref}</span>
            </label>
          ))}
        </div>
      </div>

      <button className="bg-black text-white px-6 py-2 rounded-full">
        Save
      </button>
    </div>
  );
};

// Communication Preferences Page
const CommunicationPreferencesPage = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Communication Preferences</h2>
      
      <div className="mb-6">
        <h3 className="font-semibold mb-2">General Communication</h3>
        <p className="text-gray-600 mb-4">Get updates on your products offers and membership benefits</p>
        
        <label className="flex items-center gap-2 mb-4">
          <input type="checkbox" defaultChecked />
          <span className="text-sm">Yes , send me emails.</span>
        </label>
      </div>

      <button className="bg-black text-white px-6 py-2 rounded-full">
        Save
      </button>
    </div>
  );
};

// Profile Visibility Page
const ProfileVisibilityPage = () => {
  const [profileVisibility, setProfileVisibility] = useState('Social');
  const [locationSharing, setLocationSharing] = useState('Share');

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Profile visibility</h2>
      <p className="text-gray-600 mb-4">Your Yoraa profile presents you on product reviews</p>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="font-medium">Profile Display</span>
          <span className="font-medium">Rithik27</span>
          <button className="px-4 py-1 border border-gray-300 rounded text-sm">Edit</button>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Product Review Visibility</h3>
        <p className="text-sm text-gray-600 mb-4">
          Choose how you will appear on any Nike product reviews you complete. Changing these settings will 
          also affect your visibility for connecting with friends on the YORAA Club and YORAA apps. Learn More
        </p>
        
        <div className="space-y-2 mb-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="visibility"
              checked={profileVisibility === 'Private'}
              onChange={() => setProfileVisibility('Private')}
            />
            <span className="text-sm">Private: Profile visible to only you</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="visibility"
              checked={profileVisibility === 'Social'}
              onChange={() => setProfileVisibility('Social')}
            />
            <span className="text-sm">Social: Profile visible to friends</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="visibility"
              checked={profileVisibility === 'Public'}
              onChange={() => setProfileVisibility('Public')}
            />
            <span className="text-sm">Public: Profile visible to everyone</span>
          </label>
        </div>

        <div className="mb-6">
          <h4 className="font-medium mb-2">Location Sharing</h4>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="location"
                checked={locationSharing === 'Share'}
                onChange={() => setLocationSharing('Share')}
              />
              <span className="text-sm">Share my location with friends only</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="location"
                checked={locationSharing === 'DontShare'}
                onChange={() => setLocationSharing('DontShare')}
              />
              <span className="text-sm">Don't share my location</span>
            </label>
          </div>
        </div>
      </div>

      <button className="bg-black text-white px-6 py-2 rounded-full">
        Save
      </button>
    </div>
  );
};

// Linked Accounts Page
const LinkedAccountsPage = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Linked Accounts</h2>
      <p className="text-gray-600 mb-6">Manage account and services linked to your Yoraa account</p>
      
      <p className="text-gray-500">You dont have any connected app or services</p>
    </div>
  );
};

// Language and Region Page
const LanguageRegionPage = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Language and region</h2>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-600 mb-2">Choose the language you'd like to browse the app in</p>
          <div className="flex items-center justify-between p-3 border border-gray-300 rounded-md">
            <div className="flex items-center gap-2">
              <span className="text-sm">🇬🇧</span>
              <div>
                <p className="font-medium">English (United Kingdom)</p>
                <p className="text-sm text-gray-500">Language</p>
              </div>
            </div>
            <span>›</span>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-2">
            Choose a country or region. This affects the country you are billed in, 
            availability of items, price and delivery options.
          </p>
          <div className="flex items-center justify-between p-3 border border-gray-300 rounded-md">
            <div className="flex items-center gap-2">
              <span className="text-sm">🇮🇳</span>
              <div>
                <p className="font-medium">India (USD $)</p>
                <p className="text-sm text-gray-500">Region</p>
              </div>
            </div>
            <span>›</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Delete Account Page
const DeleteAccountPage = () => {
  const [confirmDeletion, setConfirmDeletion] = useState(false);
  const [confirmTerms, setConfirmTerms] = useState(false);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Delete account</h2>
      
      <div className="mb-6">
        <h3 className="font-semibold mb-2">General Guideline</h3>
        <p className="text-gray-600 mb-4">Read deletion terms and conditions carefully.</p>
        
        <div className="space-y-3">
          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              checked={confirmDeletion}
              onChange={(e) => setConfirmDeletion(e.target.checked)}
              className="mt-1"
            />
            <span className="text-sm">Yes , proceed for account deletion</span>
          </label>
          
          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              checked={confirmTerms}
              onChange={(e) => setConfirmTerms(e.target.checked)}
              className="mt-1"
            />
            <span className="text-sm">
              I completely consent that I have gone through the terms and conditions very carefully and wish to delete my account.
            </span>
          </label>
        </div>
      </div>

      <button 
        className={`px-6 py-2 rounded-full ${
          confirmDeletion && confirmTerms
            ? 'bg-black text-white'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
        disabled={!confirmDeletion || !confirmTerms}
      >
        Delete account
      </button>
    </div>
  );
};

// Product Card Component for Trending Now section
function ProductCard({ title, price }) {
  return (
    <div className="w-[29%] flex flex-col relative gap-4">
      <div className="relative">
        <img className="w-full" src={nikeShoeimg} alt="product" />
        <div className="absolute top-3 right-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clipPath="url(#clip0_760_8957)">
              <path d="M10.0005 17.5L16.9818 10.4188C17.7144 9.68612 18.126 8.69242 18.126 7.65628C18.126 6.62014 17.7144 5.62644 16.9818 4.89378C16.2491 4.16112 15.2554 3.74951 14.2193 3.74951C13.1831 3.74951 12.1894 4.16112 11.4568 4.89378L10.0005 6.25003L8.54427 4.89378C7.8116 4.16112 6.8179 3.74951 5.78176 3.74951C4.74563 3.74951 3.75193 4.16112 3.01926 4.89378C2.2866 5.62644 1.875 6.62014 1.875 7.65628C1.875 8.69242 2.2866 9.68612 3.01926 10.4188L10.0005 17.5Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_760_8957">
                <rect width="20" height="20" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-3 right-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
            <path d="M13.9043 5.45386L14.54 18.3552H0.524414L1.16113 5.45386H13.9043Z" stroke="#14142B"/>
            <path d="M4.10937 8.06365L4.10938 4.42382C4.10938 3.51577 4.4701 2.64491 5.11219 2.00281C5.75428 1.36072 6.62514 1 7.5332 1C8.44125 1 9.31212 1.36072 9.95421 2.00281C10.5963 2.64491 10.957 3.51577 10.957 4.42382V8.06365" stroke="#14142B"/>
          </svg>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm font-medium mb-1">{title}</p>
        <p className="text-lg font-semibold">{price}</p>
      </div>
    </div>
  );
}

// Card Component from Home page
function Card() {
  return (
    <div className="w-full flex flex-col relative gap-4">
      <img className="w-full" src={nikeShoeimg} alt="nikeShoeimg" />
      <div className="absolute top-3 right-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <g clipPath="url(#clip0_760_8957)">
            <path d="M10.0005 17.5L16.9818 10.4188C17.7144 9.68612 18.126 8.69242 18.126 7.65628C18.126 6.62014 17.7144 5.62644 16.9818 4.89378C16.2491 4.16112 15.2554 3.74951 14.2193 3.74951C13.1831 3.74951 12.1894 4.16112 11.4568 4.89378L10.0005 6.25003L8.54427 4.89378C7.8116 4.16112 6.8179 3.74951 5.78176 3.74951C4.74563 3.74951 3.75193 4.16112 3.01926 4.89378C2.2866 5.62644 1.875 6.62014 1.875 7.65628C1.875 8.69242 2.2866 9.68612 3.01926 10.4188L10.0005 17.5Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_760_8957">
              <rect width="20" height="20" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-3 right-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
          <path d="M13.9043 5.45386L14.54 18.3552H0.524414L1.16113 5.45386H13.9043Z" stroke="#14142B"/>
          <path d="M4.10937 8.06365L4.10938 4.42382C4.10938 3.51577 4.4701 2.64491 5.11219 2.00281C5.75428 1.36072 6.62514 1 7.5332 1C8.44125 1 9.31212 1.36072 9.95421 2.00281C10.5963 2.64491 10.957 3.51577 10.957 4.42382V8.06365" stroke="#14142B"/>
        </svg>
      </div>
    </div>
  );
}

export default Profile;