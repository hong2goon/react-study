import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import { theme } from './Theme';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <div>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </div>
  // </React.StrictMode>
);
