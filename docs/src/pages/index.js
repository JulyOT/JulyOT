import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

// Import banner
import Image from '@theme/IdealImage';
import roadmap from './../../static/img/png/banner-a.png';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.buttons}>
        <Link to="/blog">
          <Image img={roadmap} className={styles.featureImg} />
        </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcomd to ${siteConfig.title}`}
      description="Welcome to #JulyOT 2022! Celebrate 31 days of IoT">
      <HomepageHeader />
      <main>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
