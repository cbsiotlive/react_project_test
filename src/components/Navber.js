import React from "react";
import PropTypes from 'prop-types';

export default function NavBar(nav) {
  return (
    <div className="pos-f-t">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <h4 className="text-white">{nav.title}</h4>
          <span className="text-muted">{nav.subtitle}</span>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
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
