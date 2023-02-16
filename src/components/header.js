import React from 'react';

const Header = props => {

  return (
    <header className="flex-row space-between px-1">
      <h1>Zach Camden</h1>
      {props.children}
    </header>
  );
}

export default Header;
