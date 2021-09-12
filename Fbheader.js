import React from 'react'
import './Fbheader.css';
import {BsFillPersonFill,} from 'react-icons/bs';
import {FaFacebook,FaFlag,FaVideo,FaUsers} from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai';
import {MdExpandMore} from 'react-icons/md';
import {GrAdd} from 'react-icons/gr';
import {MdForum,MdNotificationsActive} from 'react-icons/md'; 
import SearchIcon from '@material-ui/icons/Search';

function Fbheader() {
    return (
        <div className="header">
            <div className="header__left">
           <div className="fblogo"> <FaFacebook/></div>
          <div className="header__input"> <input type="text" placeholder="Search"/><SearchIcon/>
          </div>
            </div>

            <div className="header__center">
                <div className="header__option header__option--active" >
            <AiFillHome/>
             </div>

             <div className="header__option header__option--active">
            <FaFlag/>
             </div>

             <div className="header__option header__option--active">
            <FaVideo/>
             </div>
             <div className="header__option header__option--active">
            <FaUsers/>
             </div>

            
            </div>

            <div className="header__right">
                <div className="header__info">
             <div className="header__option2">
             <BsFillPersonFill/><p>My name</p>
             </div>

             <div className="header__option2">
             <GrAdd/>
             </div>

             <div className="header__option2">
             <MdForum/>
             </div>

             <div className="header__option2">
             <MdNotificationsActive/>
             </div>

             <div className="header__option2">
             <MdExpandMore/>
             </div>
           
           
            </div>
            </div>

            
        </div>
    )
}

export default Fbheader
