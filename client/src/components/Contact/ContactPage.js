import React, { useState } from "react";
import Image from "../Gallery/beach.jpeg";
import styles from "./ContactPage.module.css";

const EmailForm = () => {
  const [name] = useState("");
  const [email] = useState("");
  const [message] = useState("");

  return (
    <form className={styles.form}>
      <div className={styles.contactCard}>
        <div className={styles.contactBox}>
          <div className={styles.aboutImage}>
            <img className={styles.cardImage} src={Image} alt="placeholder" />
          </div>
          <div className={styles.contactGrid}>
            <div>
              <h1 className={styles.contactTitle}>Contact Me </h1>
              <p className={styles.contactSubTitle}>
                Let's connect! Fill out the contact form below, and I'll be
                happy to discuss availability and answer any questions you have.
              </p>
            </div>
            <label>Name:</label>
            <input
              className={styles.contactInput}
              placeholder="Name"
              type="text"
              value={name}
            />
            <label>Email:</label>
            <input
              className={styles.contactInput}
              placeholder="Email address"
              type="email"
              value={email}
            />
            <label>Message:</label>
            <textarea
              className={`${styles.contactInput}, ${styles.contactInputMessage}`}
              placeholder="Your message"
              value={message}
            />
            <button className={styles.contactButton} type="submit">
              Send
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EmailForm;
