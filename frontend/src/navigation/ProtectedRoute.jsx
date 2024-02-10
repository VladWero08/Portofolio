import { Navigate } from 'react-router-dom';
import { useCookie } from '../Cookie';

function ProtectedRoute ({Component}) {
    const { cookie, setCookieValue } = useCookie();

    console.log(cookie);

    if (cookie === null) {
        return <Navigate to="/log-in"/>;
    }

    return <Component/>;
}

export default ProtectedRoute;