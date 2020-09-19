import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import GlobalStyle from './styles/global';
import * as styles from './styles';

import Header from './components/Header';
import Board from './components/Board';
import Navigation from './components/Navigation';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <GlobalStyle />

      <styles.Container>
        <Navigation />
        <styles.Main>
          <Header />
          <Board />
        </styles.Main>
      </styles.Container>
    </DndProvider>
  );
}

export default App;
