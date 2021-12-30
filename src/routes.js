const routes =  [
    {
        path: '/', 
        name: 'home',
        component: () => import('./pages/home'),
        meta: {
            title: '首页',
            keepAlive: true
        }
    },
    {
        path: '/todo', 
        name: 'todo',
        component: () => import('./pages/todo'),
        meta: {
            title: 'TODO',
            keepAlive: false
        }
    }
];

const keepAliveList = [];
routes.forEach((item) => {
    if (item.meta.keepAlive) {
        keepAliveList.push(item.name);
    }
})

export {
    routes,
    keepAliveList
}
