// Archivo App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { routes } from './routes';

const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.component />}  // Corregido aquí
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
