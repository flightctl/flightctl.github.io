// This has a showForMobile class that is used to hide the about section on desktop
// Removing for template but if you want the full useEffect, add ${styles.showForMobile} to the first div tag

import styles from "./styles.module.css";

export default function About2() {
  return (
    <div
      className={`${styles.about} ${styles.aboutViewport} ${styles.background2}`}
      id="about"
    >
      <div className={styles.aboutGrid}>
        <div className={styles.aboutSection1}>
          <h1 className={styles.aboutHeader}>Simple and Secure Lifestyle</h1>
          <p className={styles.aboutText} role="paragraph">
            Manage the entire device journey from onboarding to decommissioning
            with minimal effort and strong safeguards{" "}
          </p>
        </div>
        <div className={styles.aboutSection2}>
          <h1 className={styles.aboutHeader}>GitOps at the Edge</h1>
          <p className={styles.aboutText} role="paragraph">
            Automate device configuration and updates using declarative
            workflows backed by version control{" "}
          </p>
        </div>
        <div className={styles.aboutSection3}>
          <h1 className={styles.aboutHeader}>Centralized Control</h1>
          <p className={styles.aboutText} role="paragraph">
            Operate and monitor all edges fleets from a single interface with
            full visibility into each device{" "}
          </p>
        </div>
        <div className={styles.aboutSection4}>
          <h1 className={styles.aboutHeader}>Built in Security</h1>
          <p className={styles.aboutText} role="paragraph">
            Support for TPM-based identity, mutual TLS, and fine-grained policy
            controls ensures secure operations{" "}
          </p>
        </div>
        <div className={styles.aboutSection5}>
          <h1 className={styles.aboutHeader}>Scales with You</h1>
          <p className={styles.aboutText} role="paragraph">
            Designed to efficiently handle thousands of devices across
            distributed environments{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
