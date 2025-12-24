
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // If no root element is found, we assume the page is running its own logic 
  // (like the single-file vanilla HTML version requested for GitHub deployment).
  console.log("React mount point not found; skipping React initialization.");
}
