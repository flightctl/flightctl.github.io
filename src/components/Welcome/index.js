import styles from "./styles.module.css";
import background from "@site/static/img/background.mp4";
import {useHistory} from "react-router-dom";

export default function Welcome() {
  const history = useHistory();
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
              <button className={styles.staticButton} onClick={() => history.push("/docs/user")}>
                User Documentation
              </button>
            </li>
            <li>
              <button className={styles.staticButton} onClick={() => history.push("/docs/developer")}>
                Developer Documentatiion
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
