import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from './Theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <div>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </div>
  // </React.StrictMode>
);
