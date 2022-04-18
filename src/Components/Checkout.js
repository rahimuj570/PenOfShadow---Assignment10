import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.int";
import EmailNotVerify from "./UserManegment/EmailNotVerify";
import Loading from "./UserManegment/Loading";

const Checkout = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }
  if (user) {
    return (
      <>
        {!user.emailVerified ? (
          <EmailNotVerify />
        ) : (
          <>
            <h1>{user.displayName}</h1>
          </>
        )}
      </>
    );
  }
  // {loading && console.log("loading")}
  // <h1>{user?.displayName}</h1>
};

export default Checkout;
