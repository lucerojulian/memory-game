import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Spinner from '../shared/display/Spinner';
import { LazyComponent } from '../components/lazy-component/LazyComponent';

const LazyHomePage = lazy(() => import('../pages/Home.page'));
const LazyPlayGamePage = lazy(() => import('../pages/PlayGame.page'));

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LazyComponent fallback={<Spinner />} Component={LazyHomePage} />
        }
      />
      <Route
        path="/play"
        element={
          <LazyComponent fallback={<Spinner />} Component={LazyPlayGamePage} />
        }
      />
    </Routes>
  );
};

export default Router;
