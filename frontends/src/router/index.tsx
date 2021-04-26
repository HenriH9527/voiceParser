import React, { ReactNode, lazy } from 'react'
const Login = lazy(() => import('../pages/login'))

interface IRouter {
    title: string,
    path: string,
    component? : ReactNode,
    children?: IRouter[],
    key: string
}

const router: IRouter[] = [
    {
        path: '/login',
        title: '登录',
        key: 'login',
        component: <Login/>
    }
]
export default router