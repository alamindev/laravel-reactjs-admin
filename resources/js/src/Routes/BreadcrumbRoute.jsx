 const routes = [
    {
        path: "/register",
        exact: true
    },
    {
        path: "/permissions",
        exact: true
    },
    {
        path: "/permissions/create",
        exact: false
    }, 
    {
        path: "/permissions/view:id",
        exact: false
    }, 
    {
        path: "/roles",
        exact: true
    }, 
    {
        path: "/roles/create",
        exact: false
    }, 
    {
        path: "/contact/",
        exact: false
    }, 
];

export default routes;