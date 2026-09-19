import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { SavedTripsProvider } from './context/SavedTripsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SavedTripsProvider>
      <App />
    </SavedTripsProvider>
  </React.StrictMode>
);
