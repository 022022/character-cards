import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { NotFound } from './pages/NotFound';

export default class App extends React.Component {
  render() {
    return (
        <Routes>
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
    );
  }
}
