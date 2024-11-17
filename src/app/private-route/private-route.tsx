import { Navigate } from 'react-router-dom';
import { AppRoutes } from 'src/shared/routes/routes';
import { AuthStatus } from 'src/shared/types/app-types';

type PrivateRouteProps = {
  authStatus: AuthStatus;
  children: JSX.Element;
}

const PrivateRoute = ({ authStatus, children }: PrivateRouteProps): JSX.Element => (
  authStatus === AuthStatus.Auth
    ?
    children
    :
    <Navigate to={AppRoutes.Login} />
);

export default PrivateRoute;
