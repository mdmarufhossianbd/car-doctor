import PropTypes from 'prop-types';
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoutes = ({ children }) => {
    
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if(loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user?.email) {
        return children
    }

    return <Navigate state={location.pathname} to={'/login'} replace></Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.object
}

export default PrivateRoutes;