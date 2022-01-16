import React, { lazy, Suspense } from 'react';
import BlankLayout from '../layouts/BlankLayout';
import { Redirect, Link } from 'react-router-dom';
const Main = lazy(()=> import('../pages/Main/Main'));
const Homes = lazy(()=> import('../pages/home/Home'));
const Settings = lazy(()=> import('../pages/settings/Settings'));
import Tabbuttom from '../components/tabbuttom/Tabbuttom';

const SuspenseComponent = Component => props => {
    return (
        <Suspense fallback={null}>
            <Component {...props}></Component>
        </Suspense>
    )
}

export default [{
    component: BlankLayout,
    routes:[
        {
            path:'/',
            exact: true,
            render: () => < Redirect to = { "/jianxun" }/>,
        },
        {
            path:'/jianxun',
            component: Tabbuttom,
            routes: [
                {
                    path: '/jianxun',
                    exact: true,
                    render: () => < Redirect to = { "/jianxun/home" }
                    />,
                },
                {
                    path: '/jianxun/main',
                    component: SuspenseComponent(Main),
                },
                {
                    path: '/jianxun/home',
                    component: SuspenseComponent(Homes),
                },
                {
                    path: '/jianxun/settings',
                    component: SuspenseComponent(Settings),
                }
            ]
        },
        
    ]
}]

