import React from 'react';
import Route from './routes';

import './index.css';

function App() {
  return (
  	<div className="app">
      <div id="loading-page">
        <div></div>
      </div>
      <div id="modal-backdrop"></div>
      <Route />
    </div>
  );
}
export default App;