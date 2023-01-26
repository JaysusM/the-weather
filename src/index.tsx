import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Weather from './pages/Weather/Weather';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Weather />
);
