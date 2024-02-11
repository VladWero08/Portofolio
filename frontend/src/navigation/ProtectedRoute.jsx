import { Navigate } from 'react-router-dom';
import { useCookie } from '../Cookie';

function ProtectedRoute ({Component}) {
    const { cookie, setCookieValue } = useCookie();

    // if the cookie is unset, redirect the user
    // to the log in page
    if (cookie === null) {
        return <Navigate to="/log-in"/>;
    }

    // otherwise, render the desired component
    return <Component/>;
}

export default ProtectedRoute;