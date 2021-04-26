import React, { ReactNode, lazy } from 'react'
const Login = lazy(() => import('../pages/login'))

interface IRouter {
    title: string,
    path: string,
    component? : ReactNode,
    children?: IRouter[] 
}

const router: IRouter[] = [
    {
        path: '/login',
        title: '登录',
        component: <Login/>
    }
]
export default router