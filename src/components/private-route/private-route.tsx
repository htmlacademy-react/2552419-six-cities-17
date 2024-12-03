import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';


type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute({authorizationStatus, children}: PrivateRouteProps): JSX.Element {
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
