import React from 'react';
import '../styles/style.css';

const header = (props) => (
    <div className="header-element">
        <div className="toggle-btn" onClick={props.click}>
            <span/>
            <span/>
            <span/>
        </div>
        <p className="title">Hola mundo</p>
    </div>
);

export default header;
