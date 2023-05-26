import React from "react";

export const UserInfo = ({ user }) => {
    return (
        <>
            <h2 className="fs-3">User details</h2>
            <div className="px-4 pb-4 pt-2">
                <div>
                    <span className="fw-bold">Username: </span>
                    <span>{user.Username}</span>
                </div>
                <div>
                    <span className="fw-bold">Email: </span>
                    <span>{user.Email}</span>
                </div>
                <div>
                    <span className="fw-bold">Birthdate: </span>
                    <span>{user.Birthday.slice(0, 10)}</span>
                </div>
            </div>
        </>
    );
};
