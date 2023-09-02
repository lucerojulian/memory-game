import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { LazyComponent } from '../components/lazy-component/LazyComponent';
import Spinner from '../shared/display/Spinner';

const routes = [
  {
    path: '/',
    Component: lazy(() => import('../pages/home/Home.page')),
  },
  {
    path: '/play',
    Component: lazy(() => import('../pages/play/Play.page')),
  },
];

const Router = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => {
        return (
          <Route
            path={path}
            key={path}
            element={
              <LazyComponent fallback={<Spinner />} Component={Component} />
            }
          ></Route>
        );
      })}
    </Routes>
  );
};

export default Router;
