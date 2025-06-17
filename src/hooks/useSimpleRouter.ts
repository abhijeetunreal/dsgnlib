
import { useState, useEffect } from 'react';

const getRouteInfo = () => {
    const hash = window.location.hash || '#/';
    // Get path from hash, e.g., #/home -> /home
    const fullRoute = hash.substring(1); 
    const path = fullRoute.split('?')[0];
    const parts = path.split('/').filter(Boolean);
    return { fullRoute, path, parts };
};

export const useSimpleRouter = () => {
    const [routeInfo, setRouteInfo] = useState(getRouteInfo());

    useEffect(() => {
        const handleHashChange = () => {
            setRouteInfo(getRouteInfo());
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return routeInfo;
};
