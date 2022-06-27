import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'IoT For Beginners',
    Svg: require('@site/static/img/svg/landing-beginner.svg').default,
    description: (
      <>
        Learn the fundamental concepts, terminology and technologies required to develop for the Internet of Things.
      </>
    ),
  },
  {
    title: 'AI at the Edge',
    Svg: require('@site/static/img/svg/landing-edge.svg').default,
    description: (
      <>
      Train AI models in the cloud, then deploy them on capable edge devices to gain real-time insights even if disconnected.
      </>
    ),
  },
  {
    title: 'IoT Certifications',
    Svg: require('@site/static/img/svg/landing-cert.svg').default,
    description: (
      <>
      Validate and showcase your expertise in IoT technologies and solutions with industry-recognized professional credentials.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
