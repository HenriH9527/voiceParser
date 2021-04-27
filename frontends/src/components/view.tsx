import React, { Component, Suspense } from 'react'
import router from '../router'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

class View extends Component {
    render () {
        return (
            <>
                <Router>
                    <Suspense fallback={<></>}>
                        <Switch>
                            {
                                router.map(r => (<Route path={r.path} exact={r.exact} key={r.key}>{r.component}</Route>))
                            }
                        </Switch>
                    </Suspense>
                </Router>
            </>
        )
    }
}

export default View