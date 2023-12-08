import React from "react";

const LoginFailedPage = ({ onReturnToHome }) => {
  return (
    <div className="login-failed">
      <h2>Login Unsuccessful</h2>
      <p>Incorrect email or password. Please try again.</p>
      <button className="button" onClick={onReturnToHome}>
        Return to Home Page
      </button>
    </div>
  );
};

export default LoginFailedPage;
