import React from 'react';
import { DiYii } from 'react-icons/di';
import { AiFillHome } from 'react-icons/ai';
import { IoMdContacts } from 'react-icons/io';
import { GiCaptainHatProfile } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css';

class NavBar extends React.Component {

    render() {
        return(
            <div>
                <h1 style = {{textAlign : "center"}}> AgroMart - Open Bidding System Platform </h1>
                <div className = "NavBar">
                    <div className = "SearchBar">
                    <DiYii className = "Icons" title = "Open Bidding System"/>
                        <input type = "text" className = "Search" style = {{color : "black"}} placeholder = "Search Here"/>
                    </div>
                    <div className = "Main" style = {{cursor : "pointer", color : "black"}}>
                        <a href = "http://localhost:3000/"><AiFillHome className = "MainIcons" title = "Home"/></a>
                        <Link to = {'/profile'}> <IoMdContacts className = "MainIcons" title = "About" /> </Link>
                        <GiCaptainHatProfile className = "MainIcons" title = "Profile" onClick = {this.props.logout}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default NavBar;