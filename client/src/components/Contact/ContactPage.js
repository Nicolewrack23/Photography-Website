import React, { useState } from "react";
import styles from "./ContactPage.module.css";

const EmailForm = () => {
  const [name] = useState("");
  const [email] = useState("");
  const [message] = useState("");

  return (
    <form className={styles.form}>
      <div className={styles.contactCard}>
        <div className={styles.contactGrid}>
          <div>
            <h1>Contact Me </h1>
            <p>
              Let's connect! Fill out the contact form below, and I'll be happy
              to discuss availability and answer any questions you have.
            </p>
          </div>
          <label>Name:</label>
          <input type="text" value={name} />
          <label>Email:</label>
          <input type="email" value={email} />
          <label>Message:</label>
          <textarea value={message} />
          <button type="submit">Send</button>
        </div>
      </div>
    </form>
  );
};

export default EmailForm;
