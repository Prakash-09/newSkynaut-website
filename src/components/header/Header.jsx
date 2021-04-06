import React from 'react';
import './Header.css';
import { Row, Col } from 'react-bootstrap';
import skynautLogo from '../../assets/images/Skynaut-logo.png';

import { Link } from 'react-router-dom';

const NAV_DATA = [
    { to: "/Features", id: "FEATURES", label: "Features" },
    { to: "/Security", id: "SECURITY", label: "Security" },
    { to: "/Privacy", id: "PRIVACY", label: "Privacy" },
    { to: "/About", id: "ABOUT", label: "About" },
    { to: "/Contact", id: "CONTACT", label: "Contact" },
]

export default class Header extends React.Component {
    render() {
        return (
            <div className="nav-bar">
                <Row className="m-0">
                    <Col xs="5" className="p-0">
                        <Link to="/" className="skynaut-logo-container">
                            <Row className="m-0">
                                <Col xs="auto" className="p-0 skynaut-logo data-v-center">
                                    <img src={skynautLogo} alt="skynaut" title="Skynaut" height="100%" weight="100%" />
                                </Col>
                                <Col className="p-0 data-v-center">
                                    <h3 className="m-0">Skynaut</h3>
                                </Col>
                            </Row>
                        </Link>
                    </Col>
                    <Col xs="7" className="p-0 data-v-center">
                        <div className="nav-bar-items-container">
                            {NAV_DATA.map((navItem, navItemIdx) =>
                                <Link key={navItemIdx} to={navItem.to} className="d-inline-block nav-bar-item">
                                    <p className="nav-bar-label-item px-4 m-0">
                                        {navItem.label}
                                    </p>
                                </Link>
                            )}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}