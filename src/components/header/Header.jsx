import React from 'react';
import './Header.css';
import { Row, Col } from 'react-bootstrap';
import skynautLogo from '../../assets/images/Skynaut-logo.png';

import { Link } from 'react-router-dom';

const NAV_DATA = [
    { to: "/WaveMe", id: "WaveMe", label: "WaveMe" },
    { to: "/AdWave", id: "AdWave", label: "AdWave" },
    { to: "/TechWave", id: "TechWave", label: "TechWave" },
    { to: "/Wavecoin", id: "WaveCoin", label: "WaveCoin" },
    { to: "/AdVertex", id: "AdVertex", label: "AdVertex" }, 
    { to: "/Studio", id: "Studio", label: "Studio" },
    { to: "/About", id: "About", label: "About" },
    { to: "/Contact", id: "Contact", label: "Contact" },
]

export default class Header extends React.Component {
    render() {
        return (
            <div className="nav-bar w-100">
                <Row className="m-0">
                    <Col xs="4" className="p-0">
                        <Link to="/" className="skynaut-logo-container ">
                            <Row className="m-0">
                                <Col xs="auto" className="p-0 ">
                                    <img src={skynautLogo} alt="skynaut" title="Skynaut" height="50" weight="50" />
                                </Col>
                                <Col className="p-0 data-v-center">
                                    <h3 className="m-0">Skynaut</h3>
                                </Col>
                            </Row>
                        </Link>
                    </Col>
                    <Col xs="8" className="p-0 data-v-center">
                        <div className="nav-bar-items-container">
                            {NAV_DATA.map((navItem, navItemIdx) =>
                                <Link key={navItemIdx} to={navItem.to} className="d-inline-block nav-bar-item">
                                    <p className="nav-bar-label-item pl-4 m-0">
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