import React from "react";
const UserProfile = () => {
  return (
    <div className="user-profile-container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDC1lw-ei7GNQLbK4pW5DF_MBm_4fPZFGa3Q&s"
        alt="User"
        className="user-profile-image"
      />
      <div className="user-profile-text">
        <h2>User Profile</h2>
        <p><strong>Name:</strong> Moureen Mutinda</p>
        <p><strong>Bio:</strong> Web Developer and Social Media Enthusiast</p>
      </div>
    </div>
  );
};

export default UserProfile;
