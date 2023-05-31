import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = ({
  user,
  children,
  redirectPath = '/login',
}) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};
