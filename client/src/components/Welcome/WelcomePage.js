import styles from "./WelcomePage.module.css";

const WelcomePage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.welcomeComponents}>
          <h1 className={styles.welcomeH1}>Welcome</h1>
          <p className={styles.welcomeP}>
            The quick brown fox jumps over the lazy dogs The quick brown fox
            jumped over the lazy dogs
          </p>
          <button>Click Me</button>
        </div>
      </div>
    </>
  );
};
export default WelcomePage;
