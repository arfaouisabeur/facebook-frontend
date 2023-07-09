import React from 'react'
import "./Navbar.css"
import av from './ph1.jpg'
import { FaFacebook,FaGamepad} from 'react-icons/fa'
import {BsSearch , BsShop , BsMenuButtonFill , BsMessenger} from'react-icons/bs'
import {AiFillHome} from'react-icons/ai'
import {MdVideoLibrary , MdNotifications} from'react-icons/md'
import {GrGroup} from'react-icons/gr'
function Navbar ()  {
  return (
    <div class="nav ">
<nav>
        
        <div class='nav__left'>
          <FaFacebook size={"3.5rem"} className='fb' />
          <div class='nav__search'>
            
            <BsSearch size={"2rem"} class="material-icons" />
            <input type='text' placeholder="Search Facebook"/>
          </div>
        </div>

        <div class='nav__mid'>
            <a href='#' class='icon'>
              <AiFillHome size={"2.5rem"} class="material-icons" />
            </a>
            <a href='#' class='icon'>
              <MdVideoLibrary size={"2.5rem"} class="material-icons" />
            </a>
            <a href='#' class='icon'>
            <BsShop size={"2.5rem"} class="material-icons" />
            </a>
            <a href='#' class='icon'>
              <GrGroup size={"2.5rem"} class="material-icons" />
            </a>
            <a href='#' class='icon'>
              <FaGamepad size={"2.5rem"} class="material-icons" />
            </a>
        </div>

        <div class="nav__right">
            
            <div class="buttons">
                <a href="#" class='icon2'><BsMenuButtonFill size={"2rem"} class="material-icons" /></a>
                <a href="#" class='icon2'><BsMessenger size={"2rem"} class="material-icons" /></a>
                <a href="#" class='icon2'><MdNotifications size={"2rem"} class="material-icons" /></a>
            </div>
            <a href='#' class="avatar">
                <img class='avatar__img' src={av} />
            </a>
        </div>
    </nav>
      </div>
  )
}

export default Navbar
