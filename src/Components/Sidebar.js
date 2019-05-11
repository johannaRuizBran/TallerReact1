import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/style.css';

const sidebar = (props) => (
    <div className="sidebar">
        <NavLink to="/">Practica uno</NavLink>
        <NavLink to="/p2">Practica dos</NavLink>
    </div>    
);

export default sidebar;