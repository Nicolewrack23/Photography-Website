import React, { useRef } from "react";
import Image from "../Gallery/beach.jpeg";
import styles from "./ContactPage.module.css";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_adospp7",
        "template_l0e6gh8",
        form.current,
        "gDtbMPSl-OQ-q2MW9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className={styles.form} ref={form} onSubmit={sendEmail}>
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
              name="user_name"
              type="text"
            />
            <label>Email:</label>
            <input
              className={styles.contactInput}
              placeholder="Email address"
              name="user_email"
              type="email"
            />
            <label>Message:</label>
            <textarea
              className={`${styles.contactInput}, ${styles.contactInputMessage}`}
              placeholder="Your message"
              name="message"
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
