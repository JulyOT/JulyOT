import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const TopFeatureList = [
  {
    title: 'IoT Cloud Skills Challenge',
    description: (
      <>
      Skill yourself up in 31 days and complete the Cloud Skills Challenge
      </>
    ),
    link: '/skills',
  },
  {
    title: 'Digital swag',
    description: (
      <>
      Grab some digital swag to get in the mood for #JulyOT
      </>
    ),
    link: '/digitalswag',
  },
];

const BottomFeatureList = [
  {
    title: 'Live streams',
    description: (
      <>
      Join IoT live streams throughout July
      </>
    ),
    link: '/livestreams',
  },
  {
    title: 'Meetups and events',
    description: (
      <>
      Meet with like-minded folks at live and virtual IoT meetups
      </>
    ),
    link: '/meetups',
  },
  {
    title: 'Resources',
    description: (
      <>
      Resources to get you started, or to continue on your journey with IoT
      </>
    ),
    link: '/resources',
  },
];

function TopFeature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <form action={link}>
          <input type="submit" value={title} class="clean-btn button button--primary margin-left--md"/>
        </form>
        <p>{description}</p>
      </div>
    </div>
  );
}

function BottomFeature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <form action={link}>
          <input type="submit" value={title} class="clean-btn button button--primary margin-left--md"/>
        </form>
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
          <div className={clsx('col col--2')}></div>
          {TopFeatureList.map((props, idx) => (
            <TopFeature key={idx} {...props} />
          ))}
          <div className={clsx('col col--2')}></div>
        </div>
        <div className="row">
          {BottomFeatureList.map((props, idx) => (
            <BottomFeature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
