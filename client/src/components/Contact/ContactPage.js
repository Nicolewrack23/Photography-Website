import React, { useState } from "react";
import styles from "./ContactPage.module.css";

const EmailForm = () => {
  const [name] = useState("");
  const [email] = useState("");
  const [message] = useState("");

  return (
    <form>
      <div className={styles.contactGrid}>
        <label>Name:</label>
        <input type="text" value={name} />
        <label>Email:</label>
        <input type="email" value={email} />
        <label>Message:</label>
        <textarea value={message} />
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

export default EmailForm;
