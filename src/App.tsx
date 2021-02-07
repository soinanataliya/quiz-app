import React from 'react';
import { Provider } from 'react-redux';
import { Body } from '../src/components/body';
import { store } from './config/store';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <header className="App-header">
        </header>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
