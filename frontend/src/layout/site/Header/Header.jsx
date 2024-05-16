import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <Fragment>
    <nav>
    <div className='header'>
    <div className="container">
    <div className="row header-row">
    <div className='nav-left col-2'>
    <Link href=""><img src="https://preview.colorlib.com/theme/aranoz/img/logo.png.webp" alt="" /></Link>
    </div>
    <div className='nav-middle col-8'>
    <ul class="nav d-flex  mb-2 mb-lg-0" >
    <li class="nav-item">
        <Link to='/' class="nav-link active">Home</Link>
    </li>
    <li class="nav-item">
        <Link class="nav-link active">Shop</Link>
    </li>
    <li class="nav-item">
        <Link to='/admin' class="nav-link active">Pages</Link>
    </li>
    <li class="nav-item">
        <Link class="nav-link active">Blog</Link>
    </li>
    <li class="nav-item">
        <Link class="nav-link active">Contact</Link>
    </li>
    </ul>
    </div>
    <div className='nav-right col-2'>
    <ul class="nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
        <Link class="nav-link active"><i class="fa-solid fa-magnifying-glass"></i></Link>
    </li>
    <li class="nav-item">
        <Link class="nav-link active"><i class="fa-regular fa-heart"></i></Link>
    </li>
    <li class="nav-item">
        <Link class="nav-link active"><i class="fa-solid fa-cart-plus"></i><sup>0</sup></Link>
    </li>
    </ul></div>
    </div>
    </div></div>
    </nav>
    </Fragment>
  )
}

export default Header
