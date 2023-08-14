import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const LazyHomePage = lazy(() => import('./pages/Home.page'));
const LazyPlayGamePage = lazy(() => import('./pages/PlayGame.page'));

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback="loading...">
            <LazyHomePage />
          </Suspense>
        }
      />
      <Route
        path="/play"
        element={
          <Suspense fallback="loading...">
            <LazyPlayGamePage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Router;
