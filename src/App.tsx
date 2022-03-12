import React, { memo, ReactElement } from 'react';
import Container from './components/container';
import Footer from './components/footer';
import Header from './components/header';

import './app.scss';

const App = (): ReactElement => (
  <>
    <Header />
    <Container />
    <Footer />
  </>
);

export default memo(App);
