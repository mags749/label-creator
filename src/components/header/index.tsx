import React, { memo, ReactElement } from 'react';

import './header.scss';

const Header = (): ReactElement => {
  return (
    <header>
      <h1>label creator</h1>
    </header>
  );
};

export default memo(Header);
