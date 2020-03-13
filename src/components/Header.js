import React, { Component } from 'react';

import { MdAccountCircle } from 'react-icons/md';

import logoFacebook from '../assets/facebook.png';

class Header extends Component {
    render() {
        return (
            <header>
                <img src={logoFacebook}></img>
                <p>
                    Meu Perfil <MdAccountCircle size="20" />
                </p>
            </header>
        );
    }
}

export default Header;