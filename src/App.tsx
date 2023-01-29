import React from 'react';
import './App.scss';
import { Outlet } from "react-router-dom";
import HmHeader from "./components/header/header";

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
