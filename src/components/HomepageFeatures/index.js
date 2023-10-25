import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Build for devs",
    Svg: require("@site/static/img/undraw_dev_productivity_re_fylf.svg")
      .default,
    description: (
      <>
        Used for prettify Markdown notes. Easy to read, to organize and to
        share. It improves learning and increase the readability for every
        notes.
      </>
    ),
  },
  {
    title: "Easy to update",
    Svg: require("@site/static/img/undraw_newspaper_re_syf5.svg").default,
    description: (
      <>
        With this documentation, it's easy to update notes and stay up-to-date.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
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
        <div className="row" style={{ "justify-content": "center" }}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
