import React, { useContext } from "react";
import { DataContext } from "../../App";
import "./styles.scss";

const Profile = () => {
  const dataSource = useContext(DataContext);
  return (
    <div className="profile-container">
      <div className="title">Profile</div>
      <div className="column">
        <div className="profile">
          <img src={dataSource.profile.avatarImage} className="profile-image" />
        </div>
        <div className="profile-details">
          <div className="text">First Name</div>
          <div className="detail">{dataSource.profile.firstName}</div>
          <div className="text">Last Name</div>
          <div className="detail">{dataSource.profile.lastName}</div>
          <div className="text">Phone</div>
          <div className="detail">{dataSource.profile.phone}</div>
          <div className="text">Email</div>
          <div className="detail">{dataSource.profile.email}</div>
          <div className="text">Bio</div>
          <div className="detail">{dataSource.profile.bio}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
