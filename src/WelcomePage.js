import React from "react";

const WelcomePage = ({ user, onWelcomePage }) => {
  return (
    <div className="welcome">
      <h2>
        Welcome, <span>{user.name}</span>
      </h2>
      <p>You've successfully logged in.</p>
      <button className='button' onClick={onWelcomePage}>Logout</button>
    </div>
  );
};

export default WelcomePage;
