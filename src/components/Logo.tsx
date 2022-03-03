import React, { FunctionComponent } from 'react';
import { useNavigate } from "react-router-dom";
import { Route } from 'react-router'
import logo from '../assets/images/pokelogo-karvi.png';

const Logo: FunctionComponent<{}> = () => {
    const navigate = useNavigate();
    return (
        <img src={logo} className="mx-auto hover:cursor-pointer" onClick={() => navigate('/')} />
    );
}

export default Logo;