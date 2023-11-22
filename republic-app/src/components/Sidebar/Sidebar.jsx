import React from 'react';
import "./Sidebar.css";
import { SidebarData } from "../../data/SidebarData";
import ViracoposLogo from '../../view/assets/img/viracopos-logo.svg';

export function Sidebar() {
    return (
        <div className="Sidebar">
            <img className='SidebarImage' src={ViracoposLogo} alt='Republic logo'></img>
            <ul className='SidebarList'>
                {SidebarData.map((value, key) => {
                    return (
                        <li
                            className='SidebarListItem'
                            key={key}
                            id={window.location.pathname === value.link ? "active" : " "}
                            onClick={() => { window.location.pathname = value.link }}>
                                <div className='SidebarListIcon'>{value.icon}</div>
                                <div className='SidebarListTitle'>{value.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>

    )
}