import styles from "./App.module.css";
import SideNavigation from "./components/Navigation/SideNavigation";
import GalleryPage from "./components/Gallery/GalleryPage";
import AboutPage from "./components/About/AboutPage";
import ContactPage from "./components/Contact/ContactPage";

function App() {
  return (
    <div>
      <SideNavigation />
      <GalleryPage />
      <div className={styles.gradient}>
        <AboutPage />
        <ContactPage />
      </div>
    </div>
  );
}

export default App;
