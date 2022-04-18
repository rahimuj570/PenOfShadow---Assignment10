import React from "react";
import { BsQuestionOctagonFill } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";
import { FaArrowAltCircleUp } from "react-icons/fa";
import "animate.css";
import { HideScroll } from "react-hide-on-scroll";

const Blogs = () => {
  return (
    <>
      <div className="mt-10 w-4/6 md:w-3/6 mx-auto">
        <h1 className="border-red-500 mx-auto rounded pb-1 border-b-4 font-exo text-4xl text-center">
          Blogs
        </h1>
        <p className="text-base mt-1 font-exo text-center">
          Answers of Three Question
        </p>
      </div>
      <div className="my-10 mx-5 sm:mx-10">
        <div className="flex items-center">
          <BsQuestionOctagonFill className="basis-20  text-3xl text-red-500" />{" "}
          <h1 className="text-xl font-bold">
            What is Difference between authorization and authentication?
          </h1>
        </div>
        <div className="mt-2 ml-10 text-base">
          <p>Authorization and Authentication both are the security terms.</p>
          <p>
            By Authorization or Authentication we can access private Recourses
            of a platform.{" "}
          </p>
          <p>
            In Authentication we need to provide our Email, Password and other
            Data to prove that I'm the right and legal person to access or use
            the system.
          </p>
          <p>
            On the otherhand in Authorization, we need to just provide our
            different account details such as Google, Facebook, Twitter, etc. to
            prove that We are the right person to access the system.
          </p>
          <p>
            Actually in Authorization, User verified by third-party application.
          </p>
        </div>

        <div className="mt-5 flex items-center">
          <BsQuestionOctagonFill className="basis-20  text-3xl text-red-500" />{" "}
          <h1 className="text-xl font-bold">
            Why are you using Firebase and What other options do you have to
            implement authentication?
          </h1>
        </div>
        <div className="mt-2 ml-10 text-base">
          <p>Firebase is a product of Google.</p>
          <p>
            Generally I'm using Firebase for Authentication/Authorization
            services.
          </p>
          <p>
            I believe that, The third-party platform can better handle this
            sensitive section than me.
          </p>
          <p>
            Because The third-party platforms have enough professional developer
            and programmer.
          </p>
          <p>
            In some practice project I'm using free hosting service of Firebase.
          </p>
          <p>
            Okta, AuthO, Passport, Amazon Cognito, Centrify, OneLogin, Heroku
            etc. are the alternative of Firebase.
          </p>
        </div>
        <div className="mt-5 flex items-center">
          <BsQuestionOctagonFill className="basis-20  text-3xl text-red-500" />{" "}
          <h1 className="text-xl font-bold">
            What services does firebase provide other than Authentication
          </h1>
        </div>
        <div className="mt-2 ml-10 text-base">
          <p>Firebase provide free and paid hosting service.</p>
          <p>Fire base Provide Cloud Storage.</p>
          <p>It also provide Google Analytics.</p>
          <p>You can use Cloud Firestore and Cloud Functions.</p>
          <p>You can use Realtime Database via Firebase</p>
        </div>
      </div>
      <HideScroll variant="down">
        <HashLink to="#top">
          <FaArrowAltCircleUp className="animate__animated animate__bounce animate__infinite animate__slower animate__delay-1s sticky bottom-12 float-right right-10 opacity-10 hover:opacity-100 duration-200 hover:text-red-500 text-5xl " />
        </HashLink>
      </HideScroll>
    </>
  );
};

export default Blogs;
