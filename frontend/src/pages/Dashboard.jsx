import React from "react";
import { useNavigate, Outlet } from 'react-router';

export default function Dashboard() {
    const navigate = useNavigate();
    return (
        <>

            <div>
                <Outlet />
                <Link to={() => navigate('/')}>Navigate to dashboard</Link>
            </div>
        </>
    )
}