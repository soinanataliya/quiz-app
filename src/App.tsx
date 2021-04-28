import React from 'react';
import { Provider } from 'react-redux';
import { Page } from '../src/components/page';
import configureStore from './config/store';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Provider store={configureStore()}>
        <header className="App-header">
        <div className='cyberText'>Quiz App</div>
        </header>
        <Page />
      </Provider>
    </div>
  );
}

export default App;
