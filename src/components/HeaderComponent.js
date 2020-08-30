import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';


class Header extends Component {
    render() {
        return (
            <>
                <Navbar dark>
                    <div className='container'>
                    <NavbarBrand href='/'>KhingzCushion</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron dark>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Welcome to KhingzCushion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        )
    }
}


export default Header;