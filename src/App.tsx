import React from 'react';
import { Provider } from 'react-redux';
import { Page } from '../src/components/page';
import { store } from './config/store';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <header className="App-header">
          Quiz app
        </header>
        <Page />
      </Provider>
    </div>
  );
}

export default App;
