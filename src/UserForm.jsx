import React from "react";

import "./userForm.scss";

const UserForm = (props) => {
  return (
    <form className="user-form">
      <input 
        type="text" 
        name="firstName" 
        className="user-form__input" 
        onChange={props.onChange}
        value={props.userData.firstName} 
      />
      <input 
        type="text" 
        name="lastName" 
        className="user-form__input"
        onChange={props.onChange}
        value={props.userData.lastName}  
      />
    </form>
  );
}

export default UserForm;
