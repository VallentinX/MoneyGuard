import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ModalTransaction from './ModalTransaction/ModalTransaction.jsx';
import { Suspense, lazy, useEffect } from 'react';
import { refreshThunk } from '../redux/auth/operations.js';
import PrivateRoute from 'routes/PrivateRoute';
import Loader from './Loader/Loader';
import MediaRoutes from 'routes/MediaRoutes';
import selectIsRefresh from '../redux/auth/selectors.js';

// lazy loading
// const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
// const RegistrationPage = lazy(() =>
//   import('pages/RegistrationPage/RegistrationPage')
// );
const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));
// const DashboardPage = lazy(() => import('pages/DashboardPage/DashboardPage'));
const CurrencyTab = lazy(() => import('pages/CurrencyTab/CurrencyTab'));
// const HomeTab = lazy(() => import('pages/HomeTab/HomeTab'));
const StatisticsTab = lazy(() => import('pages/StatisticsTab/StatisticsTab'));
export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefresh);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return isRefresh ? (
    <Loader />
  ) : (
    <Routes>
      {/* <Route
        path="login"
        element={
          <Suspense fallback={<Loader />}>
            <LoginPage />
          </Suspense>
        }
      /> */}
      {/* <Route
        path="registration"
        element={
          <Suspense fallback={<Loader />}>
            <RegistrationPage />{' '}
          </Suspense>
        }
      /> */}

      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            {/* <DashboardPage /> */}
            <ModalTransaction />
            {/* Cristian am pus modalul tau aici */}
          </Suspense>
        }
      >
        <Route
          index
          element={<PrivateRoute>-{/* <HomeTab /> */}</PrivateRoute>}
        />
        <Route
          path="statistics"
          element={
            <PrivateRoute>
              <StatisticsTab />
            </PrivateRoute>
          }
        />
        <Route
          path="currency"
          element={
            <PrivateRoute>
              <MediaRoutes>
                <Suspense fallback={<Loader />}>
                  <CurrencyTab />
                </Suspense>
              </MediaRoutes>
            </PrivateRoute>
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <Suspense fallback={<Loader />}>
            <PageNotFound />
          </Suspense>
        }
      />
    </Routes>
  );
};
