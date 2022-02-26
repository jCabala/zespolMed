import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import { ThemeProvider } from 'styled-components';
import theme from './components/globalStyles/Theme';
import { GlobalStyles } from './components/globalStyles/Global.styled';
import Jumbotron from './components/Jumbotron/Jumbotron';
import About from './components/About/About';
import Work from './components/Work/Work';
import Members from './components/Members/Members';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Jumbotron />
      <About />
      <Work />
      <Members />
      <Contact />
    </ThemeProvider>
  );
};

export default App;
