import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

export default function useNavigationState() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const toggleNav = () => setIsOpen((prev => !prev));

    return { isOpen, toggleNav };
}