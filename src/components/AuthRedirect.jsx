import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthRedirect = () => {
  const location = useLocation();
  const user = useSelector((state) => state.auth.user);

  const isRootPath = location.pathname === '/';

  if (!user) {
    return <Outlet />;
  }

  if (isRootPath) {
    const redirectPath =
      user.role === 'Admin' ? '/admin/dashboard' : '/patient/dashboard';
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default AuthRedirect;