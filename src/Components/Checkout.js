import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.int";

const Checkout = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }
  if (user) {
    return (
      <>
        {!user.emailVerified ? (
          "please varify the email"
        ) : (
          <h1>{user.displayName}</h1>
        )}
      </>
    );
  }
  // {loading && console.log("loading")}
  // <h1>{user?.displayName}</h1>
};

export default Checkout;
