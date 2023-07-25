import { StyledContainer } from "./App.styled";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./Layout";
import { lazy, useEffect } from "react";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "hooks";
import NotFound from "pages/NotFound";

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);
  
  return (
    !isRefreshing && (
      <StyledContainer>
        <Routes>
          <Route
            path="/"
            element={<SharedLayout />}>
            <Route
              index element={<HomePage />}
            />
            <Route
              path='/register'
              element={
                <RestrictedRoute
                  redirectTo='/contacts'
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path='/login'
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path='/contacts'
              element={
                <PrivateRoute
                  redirectTo='/login'
                  component={<ContactsPage />}
                />
              }
            />
          </Route>
          <Route
              path='*'
              element={<NotFound />}
            />
        </Routes>
      </StyledContainer>
    )
  );
}
