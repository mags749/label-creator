import React, { memo, ReactElement } from 'react';
import Label from '../label';

const Container = (): ReactElement => {
  return (
    <main>
      <Label />
    </main>
  );
};

export default memo(Container);
