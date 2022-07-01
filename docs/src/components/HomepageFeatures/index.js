import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '#JulyOT Blog',
    // Svg: require('@site/static/img/svg/julyot.svg').default,
    description: (
      <>
        Home of all the great content to help you celebrate #JulyOT
      </>
    ),
    link: '/blog',
  },
  {
    title: 'IoT Cloud Skills Challenge',
    // Svg: require('@site/static/img/svg/image_medals.svg').default,
    description: (
      <>
      Skill yourself up in 31 days and complete the Cloud Skills Challenge
      </>
    ),
    link: '/skills',
  },
  {
    title: 'Digital swag',
    // Svg: require('@site/static/img/svg/julyot.svg').default,
    description: (
      <>
      Grab some digital swag to get in the mood for #JulyOT
      </>
    ),
    link: '/digitalswag',
  },
  {
    title: 'Live streams',
    // Svg: require('@site/static/img/svg/webcam.svg').default,
    description: (
      <>
      Join IoT live streams throughout July
      </>
    ),
    link: '/livestreams',
  },
  {
    title: 'Meetups and events',
    // Svg: require('@site/static/img/svg/livestream.svg').default,
    description: (
      <>
      Meet with like-minded folks at live and virtual IoT meetups
      </>
    ),
    link: '/meetups',
  },
  {
    title: 'Resources',
    // Svg: require('@site/static/img/svg/resources.svg').default,
    description: (
      <>
      Resources to get you started, or to continue on your journey with IoT
      </>
    ),
    link: '/resources',
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <a href={link}>
        <Svg className={styles.featureSvg} role="img" />
        </a>
      </div> */}
      <div className="text--center padding-horiz--md">
      <a href={link}><h3>{title}</h3></a>
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
