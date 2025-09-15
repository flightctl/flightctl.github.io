import styles from "./styles.module.css";
import background from "@site/static/img/background.mp4";

export default function Welcome() {
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
          <h1 className={styles.welcomeH1}>Flight Control</h1>
          <h2 className={styles.welcomeH2}>
            Open Source Fleet Management for Edge Devices
          </h2>
          <ul>
            <li>
              <button className={styles.staticButton} href="#">
                Link 1
              </button>
            </li>
            <li>
              <button className={styles.staticButton} href="#">
                Link 2
              </button>
            </li>
            <li>
              <button className={styles.staticButton} href="#">
                Link 3
              </button>
            </li>
            <li>
              <button className={styles.staticButton} href="#">
                Link 4
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
