import React from "react";
import { Link } from "react-router-dom";
import styles from "./policy.module.css";

const PolicyPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <Link className={styles.backButton} to="/">
            Back
          </Link>
        </div>
        <div>
          <h1>Privacy policy</h1>
          <h2>
            We collect personal information from you, including information
            about your:
          </h2>
          <ul>
            <li>name</li>
            <li> contact information</li>
          </ul>
          <h2>We collect your personal information in order to:</h2>
          <ul>
            <li> do contact the individual about their enquires</li>
          </ul>
          <p>
            You have the right to ask for a copy of any personal information we
            hold about you, and to ask for it to be corrected if you think it is
            wrong. If you'd like to ask for a copy of your information, or to
            have it corrected, please contact us at nicolewrack23@gmail.com.
          </p>
        </div>
      </div>
    </>
  );
};

export default PolicyPage;
