import React, { ReactNode, lazy } from 'react'
const Dashboard = lazy(() => import('../pages/dashboard'))
const Login = lazy(() => import('../pages/login'))
const Page404 = lazy(() => import('../pages/page404'))

interface IRouter {
    title: string,
    path: string,
    component? : ReactNode,
    exact?: boolean,
    children?: IRouter[],
    key: string
}

const router: IRouter[] = [
    {
        path: '/',
        title: '仪表盘',
        key: 'dashboard',
        component: <Dashboard/>
    },
    {
        path: '/login',
        title: '登录',
        key: 'login',
        component: <Login/>
    },
    
    {
        path: '*',
        title: '404',
        key: '404',
        exact: false,
        component: <Page404/>
    }
]
export default router