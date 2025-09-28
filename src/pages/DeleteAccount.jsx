import React from 'react';

const DeleteAccount = () => {
  return (
    <div className="bg-white text-black p-6 max-w-2xl mx-auto font-sans">
    <h1 className="text-2xl font-bold mb-4">
      How to Delete Your Profile & Data on Yoraa App (Android & iOS)
    </h1>

    <div className="space-y-6">
      {/* Step 1 */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Step 1: Open the App</h2>
        <p className="text-gray-700">
          • Launch Yoraa App on your Android or iOS device.
        </p>
      </div>

      {/* Step 2 */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Step 2: Go to Settings</h2>
        <p className="text-gray-700">
          • Tap on your profile icon (usually in the top left or right corner).
        </p>
        <p className="text-gray-700">
          • Navigate to <span className="font-medium">Settings</span> or
          <span className="font-medium">Account Settings</span>.
        </p>
      </div>

      {/* Step 3 */}
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Step 3: Locate the “Delete Account” Option
        </h2>
        <p className="text-gray-700">
          • Scroll down to find <span className="font-medium">Delete Account</span> or
          <span className="font-medium">Delete Profile</span>.
        </p>
        <p className="text-gray-700">
          • Some apps may place this option under
          <span className="font-medium">Privacy</span> or
          <span className="font-medium">Security Settings</span>.
        </p>
      </div>

      {/* Step 4 */}
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Step 4: Confirm Account Deletion
        </h2>
        <p className="text-gray-700">
          • You may see options like:
          <ul className="list-disc pl-8 mt-2">
            <li>Pause Account (temporary)</li>
            <li>Delete Account (permanent)</li>
          </ul>
        </p>
        <p className="text-gray-700 mt-2">
          • Choose <span className="font-medium">Delete Account</span> for complete removal.
        </p>
      </div>

      {/* Step 5 */}
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Step 5: Follow the Final Steps
        </h2>
        <p className="text-gray-700">
          • The app may ask for a reason for deleting your account.
        </p>
        <p className="text-gray-700">
          • You may also need to enter your password or confirm via email/SMS.
        </p>
      </div>

      {/* Step 6 */}
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Step 6: Uninstall the App (Optional)
        </h2>
        <p className="text-gray-700">
          • Once your account is deleted, you can uninstall the app if you no longer need it.
        </p>
      </div>

      {/* Note */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Note:</h2>
        <p className="text-gray-700">
          • Account deletion is permanent, and all your data will be added on submission. — check the app’s policy for more details.
        </p>
      </div>
    </div>
  </div>
  );
};

export default DeleteAccount;