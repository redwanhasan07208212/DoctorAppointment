import { useContext, useState } from "react";
import "../css/MyProfile.css";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } =
    useContext(AppContext);
  const [isEdit, setIsEdit] = useState(true);
  const [image, setImage] = useState(false);

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("address", JSON.stringify(userData.address));
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);
      if (image) {
        formData.append("image", image); // Append the new image file
      }

      // Log FormData for debugging
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      const { data } = await axios.post(
        backendUrl + "/api/user/updateProfile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Backend Response:", data); // Log backend response

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData(); // Refresh user data
        setIsEdit(false);
        setImage(false);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    userData && (
      <div className="profile-container">
        {isEdit ? (
          <label htmlFor="image">
            <div className="inline-block relative cursor-pointer">
              <img
                className="w-36 rounded opacity-75"
                src={image ? URL.createObjectURL(image) : userData.image}
                alt=""
              />
              <img
                className="w-10 absolute bottom-12 right-12"
                src={image ? "" : assets.upload_icon}
                alt=""
              />
            </div>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
            />
          </label>
        ) : (
          <img src={userData.image} alt="Profile" className="profile-image" />
        )}
        {/* Profile Image */}

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
                    dob: e.target.value,
                  }))
                }
                value={userData.dob}
              />
            ) : (
              <p className="display-text">{userData.dob}</p>
            )}
          </div>
        </div>

        {/* Save/Edit Button */}
        <div>
          {isEdit ? (
            <button onClick={updateUserProfileData}>Save Information</button>
          ) : (
            <button onClick={() => setIsEdit(true)}>Edit</button>
          )}
        </div>
      </div>
    )
  );
};

export default MyProfile;
