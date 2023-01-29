import React from 'react';
import { Outlet } from "react-router-dom";

import './App.scss';
import HmHeader from "./components/header/header.component";

function App(): JSX.Element {
  return (
    <div className="hm-app">
        <HmHeader />
        <div className="hm-container">
            <Outlet />
        </div>
    </div>
  );
}

export default App;
