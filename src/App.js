import React, { useState } from "react";
import LoginForm from "./LoginForm";
import WelcomePage from "./WelcomePage";
import LoginFailedPage from "./LoginFailedPage";
import './App.css';

function App() {
  const adminUser = {
    email: "admin@user.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [showFailedPage, setShowFailedPage] = useState(false);
  const [showWelcomePage, setShowWelcomePage] = useState(false);

  const Login = (details) => {
    console.log(details);


    if (
      details.email == [""] && details.password == [""]
    ) {
      alert("Please insert your email and password to login.")
    } else if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Login successful");
      setUser({
        name: details.name,
        email: details.email,
        setShowWelcomePage,
      });
    } else {
      console.log("Login unsuccessful - details do not match!");
      setShowFailedPage(true);
    }
  };

  const Logout = () => {
    console.log("User logged out");
    setUser({ name: "", email: "" });
    setShowFailedPage(false);
  };

  const returnToHomepage = () => {
    console.log("Return to homepage");
    setUser({ name: "", email: "" });
    setShowFailedPage(false);
  };

  return (
    <div className="App">
      {user.email !== "" ? (
        <WelcomePage user={user} onWelcomePage={Logout} />
      ) : (
        <>
          {showFailedPage ? (
            <LoginFailedPage onReturnToHome={returnToHomepage} />
          ) : (
            <LoginForm Login={Login} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
