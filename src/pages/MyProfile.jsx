import { useState } from "react";
import { assets } from "../assets/assets";
import "../css/MyProfile.css"; // Import the CSS file

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Faiyad",
    image: assets.profile_pic,
    email: "faiyad@gmail.com",
    phone: "01659383342",
    address: {
      line1: "khilgaon, Dhaka",
      line2: "Goran Nobabimor",
    },
    gender: "Male",
    dateOfBirth: "2000-04-10",
  });
  const [isEdit, setIsEdit] = useState(true);

  return (
    <div className="profile-container">
      {/* Profile Image */}
      <img src={userData.image} alt="Profile" className="profile-image" />

      {/* Name */}
      {isEdit ? (
        <input
          type="text"
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
          value={userData.name}
          placeholder="Enter your name"
          className="profile-name-input"
        />
      ) : (
        <p className="profile-name">{userData.name}</p>
      )}

      <hr />

      {/* Contact Information */}
      <div>
        <p className="section-heading">Contact Information</p>
        <div>
          <p className="display-text">Email Id:</p>
          <p className="display-text">{userData.email}</p>

          <p className="display-text">Phone:</p>
          {isEdit ? (
            <input
              type="number"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
              value={userData.phone}
              placeholder="Enter your phone number"
            />
          ) : (
            <p className="display-text">{userData.phone}</p>
          )}

          <p className="display-text">Address:</p>
          {isEdit ? (
            <div className="address-input">
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
                type="text"
                placeholder="Address Line 1"
              />
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
                type="text"
                placeholder="Address Line 2"
              />
            </div>
          ) : (
            <p className="display-text">
              {userData.address.line1} <br /> {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      {/* Basic Information */}
      <div>
        <p className="section-heading">Basic Information</p>
        <div>
          <p className="display-text">Gender:</p>
          {isEdit ? (
            <select
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="display-text">{userData.gender}</p>
          )}

          <p className="display-text">Birthday:</p>
          {isEdit ? (
            <input
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  dateOfBirth: e.target.value,
                }))
              }
              value={userData.dateOfBirth}
            />
          ) : (
            <p className="display-text">{userData.dateOfBirth}</p>
          )}
        </div>
      </div>

      {/* Save/Edit Button */}
      <div>
        {isEdit ? (
          <button onClick={() => setIsEdit(false)}>Save Information</button>
        ) : (
          <button onClick={() => setIsEdit(true)}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
