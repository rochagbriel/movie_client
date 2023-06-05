import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRoutes = ({
  children,
  redirectPath = '/login',
}) => {
  const user = useSelector((state) => state.user.user);
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};
