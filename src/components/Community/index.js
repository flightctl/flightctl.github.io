import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faBug } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const resources = [
//   {
//     icon: "📚",
//     title: "Documentation",
//     description: "Comprehensive guides and API references",
//     link: "/docs/user",
//     linkText: "Read Docs",
//   },
  {
    icon: <FontAwesomeIcon icon={faUsers} />,
    title: "Community",
    description: "Join discussions and get help from the community",
    link: "#",
    linkText: "Join Discussion",
    external: true,
  },
  {
    icon: <FontAwesomeIcon icon={faBug} />,
    title: "Report Issues",
    description: "Found a bug? Let us know on GitHub",
    link: "https://github.com/flightctl/flightctl/issues",
    linkText: "Report Issue",
    external: true,
  },
  {
    icon: <FontAwesomeIcon icon={faCode} />,
    title: "Contribute",
    description: "Help improve Flight Control for everyone",
    link: "https://github.com/flightctl/flightctl",
    linkText: "View on GitHub",
    external: true,
  },
];

export default function Community() {
  return (
    <div className={styles.community}>
      <div className={styles.container}>
        
        {/* Resources Section */}
        <div className={styles.header}>
          <h2 className={styles.title}>Join the Community</h2>
          <p className={styles.subtitle}>
            Get involved, contribute, and help shape the future of edge device management
          </p>
        </div>

        <div className={styles.resourcesGrid}>
          {resources.map((resource, idx) => (
            <a
              key={idx}
              href={resource.link}
              className={styles.resourceCard}
              target={resource.external ? "_blank" : "_self"}
              rel={resource.external ? "noopener noreferrer" : ""}
            >
              <div className={styles.resourceIcon}>{resource.icon}</div>
              <h3 className={styles.resourceTitle}>{resource.title}</h3>
              <p className={styles.resourceDescription}>{resource.description}</p>
              <span className={styles.resourceLink}>
                {resource.linkText} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

