import React from "react";
import { Link } from "react-router-dom";
import styles from "./FooterPage.module.css";

const FooterPage = () => {
  return (
    <>
      <footer className={styles.backgroundColor}>
        <div className={styles.container}>
          <p className={styles.textStyling}>Created by Nicole Wrack</p>
          <p className={styles.textStyling}>© 2023 Jays Photography</p>
          <p className={styles.textStyling}>
            <Link className={styles.links} to="/privacyPolicy">
              Privacy policy
            </Link>{" "}
            |{" "}
            <Link className={styles.links} to="/disclaimer">
              Disclaimer
            </Link>{" "}
            |{" "}
            <Link className={styles.links} to="/terms">
              Terms of Service
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default FooterPage;
