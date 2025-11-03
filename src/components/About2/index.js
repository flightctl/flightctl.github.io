// This has a showForMobile class that is used to hide the about section on desktop
// Removing for template but if you want the full useEffect, add ${styles.showForMobile} to the first div tag

import styles from "./styles.module.css";

const features = [
  {
    title: "Simple and Secure Lifecycle",
    description: "Manage the entire device journey from onboarding to decommissioning with minimal effort and strong safeguards",
  },
  {
    title: "GitOps at the Edge",
    description: "Automate device configuration and updates using declarative workflows backed by version control",
  },
  {
    title: "Centralized Control",
    description: "Operate and monitor all edge fleets from a single interface with full visibility into each device",
  },
  {
    title: "Built-in Security",
    description: "Support for TPM-based identity, mutual TLS, and fine-grained policy controls ensures secure operations",
  },
  {
    title: "Scales with You",
    description: "Designed to efficiently handle thousands of devices across distributed environments",
  },
];

export default function About2() {
  return (
    <div
      className={`${styles.about} ${styles.aboutViewport} ${styles.background2}`}
      id="features"
    >
      <div className={styles.featuresContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why FlightControl?</h2>
          <p className={styles.sectionSubtitle}>
            Everything you need to manage your edge device fleet at scale
          </p>
        </div>
        <div className={styles.aboutGrid}>
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={styles[`aboutSection${idx + 1}`]}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className={styles.aboutHeader}>{feature.title}</h3>
              <p className={styles.aboutText} role="paragraph">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
