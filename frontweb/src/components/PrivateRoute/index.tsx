import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from 'util/requests';

type Props = {
  children: React.ReactNode;
  path: string;
};

const PrivateRoute = ({ children, path }: Props) => {
  return (
    <Route
      path={path}
      render={() =>
        !isAuthenticated() ? (
          <Redirect to="/admin/auth/login" />
        ) : (
          <>{children}</>
        )
      }
    />
  );
};

export default PrivateRoute;
