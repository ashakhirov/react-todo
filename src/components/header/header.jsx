import React from 'react';
import PropTypes from 'prop-types';

import FirstHeading from './first-heading/first-heading';
import ItemAddInput from './item-add-input/item-add-input';

const Header = ({ onTodoAdd }) => {
  return (
    <header className="header">
      <FirstHeading />
      <ItemAddInput onTodoAdd={onTodoAdd} />
    </header>
  );
};

Header.propTypes = {
  onTodoAdd: PropTypes.func.isRequired,
};

export default Header;
