import React, { useContext, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo2 from "../images/icons/logo2.png";
import cart from "../images/icons/cart-sm.png";
import "./Header.css";
import { AuthContext } from "../context/AuthContext";

function Header() {
    const { isAuth, isAuthenticated, signOut } = useContext(AuthContext);

    useEffect(() => {
        isAuthenticated();
    }, [isAuthenticated]);

    return (
        <div className="nav-wrapper fixed-top navbar navbar-toggleable-sm navbar-expand-md">
            <div className="container">
                <Navbar
                    className="w-100"
                    collapseOnSelect
                    expand="lg"
                    variant="dark"
                >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Brand href="/">
                        <img src={logo2} alt="" />
                    </Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="nav-justified w-100 nav-fill">
                            <Nav.Link href="/">Oneul</Nav.Link>
                            <Nav.Link href="/brand">Brand</Nav.Link>
                            {isAuth ? (
                                <>
                                    <Nav.Link onClick={signOut}>
                                        Logout
                                    </Nav.Link>
                                    <Nav.Link href="/user/cart">
                                        cart
                                        {/* <img src={cart} alt="cart" /> */}
                                    </Nav.Link>
                                </>
                            ) : (
                                <>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link href="/login">
                                        cart
                                        {/* <img src={cart} alt="cart" /> */}
                                    </Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
}

export default Header;
