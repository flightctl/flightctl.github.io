import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout"; 

import Welcome from "@site/src/components/Welcome";
import About2 from "@site/src/components/About2";
import Community from "@site/src/components/Community";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | ${siteConfig.tagline}`}
      description="Open Source Fleet Management for Edge Devices - Manage thousands of edge devices with GitOps workflows, built-in security, and centralized control"
    >
      <main>
        <Welcome />
        <About2 />
        {/* <Community /> */}
      </main>
    </Layout>
  );
}
