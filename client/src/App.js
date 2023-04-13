import SideNavigation from "./components/Navigation/SideNavigation";
import GalleryPage from "./components/Gallery/GalleryPage";
import AboutPage from "./components/About/AboutPage";
import ContactPage from "./components/Contact/ContactPage";

function App() {
  return (
    <div>
      <SideNavigation />
      <GalleryPage />
      <AboutPage />
      <ContactPage />
    </div>
  );
}

export default App;
