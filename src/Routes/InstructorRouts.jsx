import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useInstructor from "../Hooks/useInstructor";

const InstructorRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructor()
    const location = useLocation()
    if (loading || isInstructorLoading) {
        return <progress className="progress w-56"></progress>
    }
    if (user && isInstructor) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default InstructorRoutes;