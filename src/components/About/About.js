import React from 'react';
import PropTypes from 'prop-types';
import styles from './About.module.css';

const About = () => (
  <div className={styles.About} data-testid="About">
    About Component
  </div>
);

About.propTypes = {};

About.defaultProps = {};

export default About;
