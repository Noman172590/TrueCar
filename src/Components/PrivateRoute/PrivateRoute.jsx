import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center items-center"><span className="loading loading-infinity loading-lg"></span></div>
    }

    if (user) {
        return children;
    }



    return <Navigate state={location.pathname} to = "/login"></Navigate>
};

export default PrivateRoute;