import React from 'react';
import { createRoot } from "react-dom/client";

import App from './App';

import configureStore from './redux/store';
const store = configureStore();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App store={store} />);