import React from 'react'
import { Link } from 'react-router-dom'

class NavigationBar extends React.Component {
    render () {
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light mb3'>
                <div className='container'>
                    <Link className='navbar-brand' to='/'>Login功能</Link>
                    <button className='navbar-toggle' type='button' data-toggle='collapse' data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className='navbar-toggle-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarsExample05'>
                        <ul className='navbar-nav mr-auto'>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/signup'>注册</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavigationBar