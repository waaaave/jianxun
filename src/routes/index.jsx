import React, { lazy, Suspense } from 'react';
import BlankLayout from '../layouts/BlankLayout';
import { Redirect, Link } from 'react-router-dom';
const Main = lazy(() => import('../pages/Main/Main'));
const Home = lazy(() => import('../pages/home/Home'));
const Readed = lazy(() => import('../pages/readed/Readed'));
const Settings = lazy(() => import('../pages/settings/Settings'));
const Liked = lazy(() => import('../pages/liked/Liked'));
const Login = lazy(() => import('../pages/login/Login'));
const Search = lazy(() => import('../pages/search/Search'));
const Comments = lazy(() => import('../pages/comments/Comments'));

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
  routes: [
    {
      path: '/',
      exact: true,
      render: () => < Redirect to={"/jianxun"} />,
    },
    {
      path: '/jianxun',
      component: Tabbuttom,
      routes: [
        {
          path: '/jianxun',
          exact: true,
          render: () => < Redirect to={"/jianxun/home"}
          />,
        },
        {
          path: '/jianxun/main',
          component: SuspenseComponent(Main),
        },
        {
          path: '/jianxun/home',
          component: SuspenseComponent(Home),
        },
        {
          path: '/jianxun/settings',
          component: SuspenseComponent(Settings),
        },
        {
          path: '/jianxun/login',
          component: SuspenseComponent(Login),
        },
        {
          path: '/jianxun/readed',
          component: SuspenseComponent(Readed),
        },
        {
          path: '/jianxun/liked',
          component: SuspenseComponent(Liked),
        },
        {
          path: '/jianxun/comments',
          component: SuspenseComponent(Comments),
        },
        {
          path: '/jianxun/search',
          component: SuspenseComponent(Search),
        }
        // {
        //   path: '/jianxun/home/comment',
        //   component: SuspenseComponent(Settings),
          // render: () => {
          //   if (!isLogin) {
          //     return <Redirect to='/login' />
          //   } else {
          //     console.log('?????????');
          //     return <HomeComponent />
          //   }
          // }
        // }
      ]
    },

  ]
}]

