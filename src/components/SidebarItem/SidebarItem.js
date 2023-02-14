import React from 'react';
import './SidebarItem.css';


function SidebarItem(props) {
    return (
        <div className='sidebar-item'>
            <img src={process.env.PUBLIC_URL + `/${props.imgName}.png`} className="sidebar-img" alt={props.alt}></img>
            <span className='sidebar-text'>{props.sidebarText}</span>
        </div>
    );
}

export default SidebarItem;