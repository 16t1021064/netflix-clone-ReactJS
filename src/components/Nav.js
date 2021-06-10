import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div className="nav false">
                <img
                    className="nav__logo"
                    src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                    alt=""
                />
                <img
                    className="nav__avatar"
                    src="http://pngimg.com/uploads/netflix/netflix_PNG8.png"
                    alt=""
                />
            </div>
        );
    }
}

export default Nav;