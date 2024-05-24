import React from 'react'
import "./Header.scss"
import { FaUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";

const Header = () => {
  return (
    <>
    <div className='container header'>
    <IoSearchOutline className='searchicon' />
        <input placeholder='Search' type="text" className='input' />
        <div className='logo'>SHOPPERS</div>
        <div className='icons'>
        <FaUser />
        <CiHeart />
        <SlBasket />
        </div>
    </div>
    </>
  )
}

export default Header