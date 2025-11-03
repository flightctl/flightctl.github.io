import styles from "./styles.module.css";
import {useHistory} from "react-router-dom";

const steps = [
  {
    number: "1",
    title: "Install CLI",
    description: "Get started by installing the Flight Control CLI tool",
    command: "curl -s https://flightctl.io/install.sh | bash",
  },
  {
    number: "2",
    title: "Deploy Service",
    description: "Deploy the Flight Control service to your cluster",
    command: "flightctl deploy --config config.yaml",
  },
  {
    number: "3",
    title: "Register Devices",
    description: "Connect your edge devices to the platform",
    command: "flightctl device register --name my-device",
  },
];

export default function QuickStart() {
  const history = useHistory();

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className={styles.quickStart}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Get Started in Minutes</h2>
          <p className={styles.subtitle}>
            Deploy Flight Control and start managing your edge devices in three simple steps
          </p>
        </div>
        
        <div className={styles.stepsGrid}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
              <div className={styles.codeBlock}>
                <code className={styles.code}>{step.command}</code>
                <button
                  className={styles.copyButton}
                  onClick={() => copyToClipboard(step.command)}
                  aria-label="Copy command"
                >
                  📋
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>
            Ready to dive deeper?
          </p>
          <div className={styles.ctaButtons}>
            <button
              className={`${styles.button} ${styles.primaryBtn}`}
              onClick={() => history.push("/docs/user/getting-started")}
            >
              Full Installation Guide
            </button>
            <button
              className={`${styles.button} ${styles.secondaryBtn}`}
              onClick={() => history.push("/docs/user")}
            >
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

