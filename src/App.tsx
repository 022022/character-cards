import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Create } from './pages/Create/Create';
import { MainPage } from './pages/MainPage/MainPage';

import { NotFound } from './pages/NotFound/NotFound';

import styles from './App.module.css';

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/create" element={<Create />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </div>
    );
  }
}
