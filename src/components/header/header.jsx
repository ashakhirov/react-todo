import React from 'react';

import FirstHeading from './first-heading/first-heading';
import ItemAddInput from './item-add-input/item-add-input';

const Header = () => {
  return (
    <header className="header">
      <FirstHeading />
      <ItemAddInput />
    </header>
  );
};

export default Header;
