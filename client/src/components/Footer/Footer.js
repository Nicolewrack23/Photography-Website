import React from "react";
import { Link } from "react-router-dom";
import styles from "./FooterPage.module.css";

const FooterPage = () => {
  return (
    <>
      <footer>
        <div className={styles.container}>
          <p>Created by Nicole Wrack</p>
          <p>© 2023 Jays Photography</p>
          <p>
            <Link to="/privacyPolicy">Privacy policy</Link> |{" "}
            <Link to="/disclaimer">Disclaimer</Link> |{" "}
            <Link to="/terms">Terms of Service</Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default FooterPage;
