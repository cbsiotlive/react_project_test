import React from "react";
import PropTypes from 'prop-types';
import "./style.css";
export default function NavBar(nav) {
  return (
    <>
    <h1>main.js</h1>
    </>
  );
}

NavBar.defaultProps = {
  title: 'set title',
  subtitle: 'set subtitle'
};

NavBar.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};
