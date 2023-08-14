import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Spinner from './shared/display/Spinner';

const LazyHomePage = lazy(() => import('./pages/Home.page'));
const LazyPlayGamePage = lazy(() => import('./pages/PlayGame.page'));

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Spinner />}>
            <LazyHomePage />
          </Suspense>
        }
      />
      <Route
        path="/play"
        element={
          <Suspense fallback={<Spinner />}>
            <LazyPlayGamePage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Router;
