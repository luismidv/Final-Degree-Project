import AppRoom from './AppRoom.jsx'
import ReactDOM from "react-dom/client";
import React from "react";
import { createElement} from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Menu from './App.jsx'


const roomContainer = ReactDOM.createRoot(document.getElementById('room-container1'));
roomContainer.render(
  <React.StrictMode>
    <AppRoom />
  </React.StrictMode>
);