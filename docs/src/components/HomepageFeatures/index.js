import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'IoT For Beginners',
    Svg: require('@site/static/img/svg/landing-beginner.svg').default,
    description: (
      <>
        fill in stuff here....
      </>
    ),
  },
  {
    title: 'AI at the Edge',
    Svg: require('@site/static/img/svg/landing-edge.svg').default,
    description: (
      <>
      fill in stuff here....
      </>
    ),
  },
  {
    title: 'IoT Certifications',
    Svg: require('@site/static/img/svg/landing-cert.svg').default,
    description: (
      <>
      fill in stuff here....
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
