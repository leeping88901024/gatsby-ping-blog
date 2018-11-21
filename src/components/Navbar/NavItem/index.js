import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import './index.scss';

const NavItem = ({ url, name, list }) => {
  return (
    <Link
      className="nav-btn btn btn-link"
      href={url}
      to={url}
    >
      {name}
    </Link>
  );
};

NavItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

NavItem.defaultProps = {
  list: [],
};

export default NavItem;
