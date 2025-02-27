import React, { useState } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";

export default function Signup() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Authenticator>
      {({ signOut, user }) => {
        if (user && !isAuthenticated) {
          setIsAuthenticated(true); 
          navigate("/Navbar"); // Redirect to Navbar page after login
        }
        return (
          <main>
            <h1>Welcome, {user?.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        );
      }}
    </Authenticator>
  );
}
