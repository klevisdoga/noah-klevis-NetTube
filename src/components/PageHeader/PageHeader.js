import React from 'react'
import './PageHeader.scss'
import logo from '../../assets/images/NettubeLogo.png'
import { Link } from 'react-router-dom'

export default function PageHeader() {

    const submitHander = (ev) => {
        ev.preventDefault();
    }
    return (
        <div className='header'>
            <Link to='/'><img className='header__logo' src={logo} alt='logo' /></Link>
            <form onSubmit={submitHander} className='header__form'>
                <input placeholder='Search' type='search' id='search' name='search' className='header__form-search' />
                <button type='submit' className='header__form-button'>Search</button>
            </form>
        </div>
    )
}
