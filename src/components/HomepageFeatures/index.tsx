import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  to: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Explore your Data',
    Svg: require('@site/static/img/database.svg').default,
    to: '/docs/data-explorer/data-explorer',
    description: (
      <>
        The Sort Data Explorer makes it easy to query a database with
        the simplicity of a spreadsheet.
      </>
    ),
  },
  {
    title: 'Report Issues',
    Svg: require('@site/static/img/issues.svg').default,
    to: '/docs/category/issues',
    description: (
      <>
        Track improvements, answer questions, report inconsistencies, or
        brainstorm on how to improve queries.
      </>
    ),
  },
  {
    title: 'Change your Data',
    Svg: require('@site/static/img/lightning.svg').default,
    to: '/docs/category/change-requests',
    description: (
      <>
        Use the magic of GitHub pull request workflows for any type of data changes.
      </>
    ),
  },
];

function Feature({ title, Svg, description, to }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={to}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" width="56" height="57" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
