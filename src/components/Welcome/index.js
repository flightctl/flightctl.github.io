import styles from "./styles.module.css";
import background from "@site/static/img/background.mp4";
import flightControlLogo from "@site/static/img/flight-control-horizontal-logo-one-color-white.png";
import {useHistory} from "react-router-dom";

export default function Welcome() {
  const history = useHistory();
  
  // Scroll to features section
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className={`${styles.welcome} ${styles.viewport}`}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
          className={styles.backgroundVideo}
        >
          <source src={background} type="video/mp4" />
        </video>
        <div className={styles.welcomeInfo}>
          <img src={flightControlLogo} alt="FlightControl Logo" className={styles.flightControlLogo} />
          <h2 className={styles.welcomeH2}>
            Open Source Fleet Management for Edge Devices
          </h2>
          <p className={styles.welcomeSubtitle}>
            Manage thousands of edge devices with GitOps workflows, built-in security, and centralized control
          </p>
          <div className={styles.buttonGroup}>
            {/* <button 
              className={`${styles.staticButton} ${styles.primaryButton}`} 
              onClick={() => history.push("/docs/user/getting-started")}
            >
              Get Started
            </button>
            <button 
              className={`${styles.staticButton} ${styles.secondaryButton}`} 
              onClick={() => history.push("/docs/user")}
            >
              Documentation
            </button> */}
            <button 
              className={`${styles.staticButton} ${styles.secondaryButton}`} 
              onClick={() => window.open("https://github.com/flightctl/flightctl", "_blank")}
            >
              View on GitHub
            </button>
          </div>
          <button 
            className={styles.scrollButton}
            onClick={scrollToFeatures}
            aria-label="Scroll to features"
          >
            <span className={styles.scrollArrow}>↓</span>
          </button>
        </div>
      </div>
    </>
  );
}
