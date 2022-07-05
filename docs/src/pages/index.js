import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

// Import banner
import Image from '@theme/IdealImage';
import roadmap from './../../static/img/gif/julyot.gif';


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
      title={`Welcome to ${siteConfig.title}`}
      description="Welcome to #JulyOT 2022! Celebrate 31 days of IoT">
      <HomepageHeader />
      <main>
        <br/>
      <div className={clsx('col col--12')}>
        <div className="text--center padding-horiz--md">
          <form action="/blog">
            <input type="submit" value="Start here!" class="clean-btn button button--secondary margin-left--md" style={{'font-size':'50px'}}/>
          </form>
          <a href="/blog">
          <h3></h3>
          Head to the blog to find the home of all the great<br/>content to help you celebrate #JulyOT</a>
        </div>
        <br/>
      </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
