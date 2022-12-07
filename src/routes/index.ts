import Following from "~/page/Following";
import Home from "~/page/Home";

// Public routes
const publicRoutes: any[] = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/following',
        component: Following
    },
];

const privateRoutes: any[] = [];

export {
    publicRoutes,
    privateRoutes
}