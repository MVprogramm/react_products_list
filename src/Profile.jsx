import React from "react";

import UserForm from "./UserForm.jsx";
import "./column.scss";

const Profile = (props) => {
  return (
    <div className="column">
      <UserForm 
        userData={props.userData}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Profile;
