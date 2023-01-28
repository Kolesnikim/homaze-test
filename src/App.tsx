import React from 'react';
import './App.scss';
import {Outlet} from "react-router-dom";

function App(): JSX.Element {
  return (
    <div className="hm">
      <header className="hm-header">
      </header>
        <div className="hm-container">
            <Outlet />
        </div>
    </div>
  );
}

export default App;
