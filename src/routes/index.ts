import { FC, ReactElement } from "react";
import Following from "~/pages/Following";
import Home from "~/pages/Home";

interface Route {
    path: string;
    component: FC;
    layout?: FC<any>;
}

// Public routes
const publicRoutes: Route[] = [
    {
        path: '/',
        component: Home,
        layout: null
    },
    {
        path: '/following',
        component: Following,
      
    },
];

const privateRoutes: any[] = [];

export {
    publicRoutes,
    privateRoutes
}