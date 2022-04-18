import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../firebase.int";
import EmailNotVerify from "./UserManegment/EmailNotVerify";
import Loading from "./UserManegment/Loading";

const Checkout = () => {
  const [user, loading, error] = useAuthState(auth);

  if (error) {
    return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
        {toast.error("Something Went Wrong. Please Try Again.")}
      </>
    );
  }
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
            <div className="">
              {user.displayName} {console.log(user)}
            </div>
          </>
        )}
      </>
    );
  }
};

export default Checkout;
