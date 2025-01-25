import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface RouteGuardProps {
    children: ReactNode;
}

export default function RouteGuard({ children }: RouteGuardProps) {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/signin" replace />;
    }

    return <>{children}</>;
}
