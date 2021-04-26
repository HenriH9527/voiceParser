import React, { Component, Suspense } from 'react'
import router from '../router'
import { BrowserRouter as Router, Route } from "react-router-dom"

class View extends Component {
    render () {
        return (
            <>
                <Suspense fallback={<></>}>
                    <Router>
                        {
                            router.map(r => (<Route path={r.path} key={r.key}>{r.component}</Route>))
                        }
                    </Router>
                </Suspense>
            </>
        )
    }
}

export default View