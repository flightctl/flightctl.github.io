import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout"; 

import Welcome from "@site/src/components/Welcome";
import About2 from "@site/src/components/About2";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | ${siteConfig.tagline}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <Welcome />
        <About2 />
      </main>
    </Layout>
  );
}
