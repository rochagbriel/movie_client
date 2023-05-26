import React from "react";

export const UserInfo = ({ user }) => {

    
    

    return (
      <>
        <p>User: {user.Username}</p>
        <p>Email: {user.Email}</p>
        <p>Birthdate: {user.Birthday.slice(0, 10)}</p>
      </>
    );
  };