import React from 'react';
import './Home.css';
import { Row, Col, Button, Card } from 'react-bootstrap';
import wavemeLogo from '../../../assets/images/waveme-Logo.png';
import globeRadarSmall from '../../../assets/images/radar-1.svg';
import globeRadarMedium from '../../../assets/images/radar-2.svg';
import explorePlotformImg from '../../../assets/images/explore-plotform.png';
// import globeRadarLarge from '../../../assets/images/radar-3.svg';
import data from './HomeData';

const COMMUNICATION_LOGOS = {
    "waveme": { label: "SMS API Platform", image: require('../../../assets/images/waveme-Logo.png') },
    "adwave": { label: "voice API Platform", image: require('../../../assets/images/waveme-Logo.png') },
    "techwave": { label: "Zentrunk", image: require('../../../assets/images/waveme-Logo.png') },
}

export default class Home extends React.Component {
    render() {
        return (
            <div className="content">
                <Row xs="1" md="2" className="m-0 pt-5 mt-5">
                    <Col className="p-0 data-v-center">
                        <div>
                            <p className="main-text">
                                Skynaut is the leader in democratization of hyper local digital marketing
                            </p>
                            <p className="sub-text mt-4">
                                Radically accelerate your digital marketing journey for your enterprises at scale.
                            </p>
                            <Button className="content-button px-3 py-2 mt-4">TALK TO AN EXPERT</Button>
                        </div>
                    </Col>
                    <Col className="p-0 data-vh-center">
                        <div className="banner-animation-container">
                            <div className="globe-pulse"></div>
                            <div className="globe-radar-container globe-radar-container-small">
                                <img src={globeRadarSmall} alt="globe-radar-small" title="globe-radar-small" className="globe-radar-small" />
                            </div>
                            <div className="globe-radar-container globe-radar-container-medium">
                                <img src={globeRadarMedium} alt="globe-radar-medium" title="globe-radar-medium" className="globe-radar-medium" />
                            </div>
                            <div className="globe ">
                                <div className="globe-map"></div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="businessSite-container pt-3">
                    <p className="main-text text-center">
                        Enterprise grade digital marketing stack for your business
                    </p>
                    <Row className="m-0" xs="1" md="3">
                        {data.BUSINESS_SITES.map((businessSite, businessSiteIdx) =>
                            <Col className="p-2" key={businessSiteIdx}>
                                <Card className="businessSite-card p-3">
                                    <Card.Body className="p-0">
                                        <Row className="m-0">
                                            <Col xs="2" className="p-0 data-v-center">
                                                <img src={COMMUNICATION_LOGOS[businessSite.key].image.default} alt={COMMUNICATION_LOGOS[businessSite.key].label} title={COMMUNICATION_LOGOS[businessSite.key].label} height="65%" width="75%" />
                                            </Col>
                                            <Col xs="10" className="p-0 pl-1 pt-2 data-v-center">
                                                <p className="card-title">{businessSite.title}</p>
                                            </Col>
                                        </Row>
                                        <Row className="m-0">
                                            <Col className="p-0">
                                                {businessSite.description}
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    <Card.Footer>
                                        <p className="m-0 mt-3 learn-more text-right">Learn More <i className="fa fa-angle-double-right" /></p>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </div>
                <Row className="m-0" xs="1">
                    {data.BUSINESS_SITES_SPECIAL_CARDS.map((specialCard, specialCardIdx) =>
                        <Col className="p-2">
                            <Card className="entire-single-card py-3">
                                <Row className="m-0">
                                    <Col className="p-0 pl-3 data-v-center" xs="1">
                                        <img src={wavemeLogo} alt="waveme-icon" title="waveme-icon" width="55%" height="75%" />
                                    </Col>
                                    <Col className="p-0 pl-1 data-v-center card-title" xs="2">{specialCard.title}</Col>
                                    <Col className="p-0 pl-4 data-v-center" xs="7">
                                        <span>{specialCard.description}</span>
                                    </Col>
                                    <Col className="p-0 data-v-center text-right" xs="2">
                                        <span className="pl-5 learn-more">Learn More <i className="fa fa-angle-double-right" /></span>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    )}
                </Row>
                <div className="mt-3">
                    <p className="main-text text-center pt-5">Explore our plotform</p>
                    <Row className="m-0" xs="1" md="2">
                        <Col className="p-0 pt-2">
                            <img src={explorePlotformImg} alt="explore-plotform" title="explore-plotform" height="100%" width="100%" />
                        </Col>
                        <Col className="p-0"></Col>
                    </Row>
                </div>
                <div className="mt-3">
                    <p className="main-text text-center pt-5">
                        Explore our solutions templates
                    </p>
                    <Row className="m-0" xs="1" md="3">
                        {data.EXPOLORE_SOLUTIONS.map((expsol, expsolIdx) =>
                            <Col className="px-2 py-4" key={expsolIdx}>
                                <Card className="solution-card p-3">
                                    <Card.Body className="p-0">
                                        <p className="text-left"><img src={wavemeLogo} alt="waveme-icon" title="waveme-icon" width="12%" height="12%" /></p>
                                        <p className="card-title mt-4">{expsol.title}</p>
                                        <p className="mt-4">{expsol.description}</p>
                                    </Card.Body>
                                    <Card.Footer><p className="m-0 learn-more text-right">Learn More <i className="fa fa-angle-double-right" /></p></Card.Footer>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </div>
                <div className="mt-3">
                    <p className="main-text text-center pt-5">Top reasons why businesses choose SkyNaut</p>
                    <Row className="m-0" xs="1" md="2">
                        {data.TOP_REASONS.map((topReason, topReasonIdx) =>
                            <Col className="px-2 py-4" key={topReasonIdx}>
                                <Card className="topReason-card p-3">
                                    <Card.Body className="p-0">
                                        <p className="text-left"><img src={wavemeLogo} alt="waveme-icon" title="waveme-icon" width="8%" height="8%" /></p>
                                        <p className="card-title mt-2">{topReason.title}</p>
                                        <p>{topReason.description}</p>
                                    </Card.Body>
                                    <Card.Footer>
                                        <p className="m-0 learn-more text-right" >Learn More <i className="fa fa-angle-double-right" /></p>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </div>
                <div className="mt-3 text-center">
                    <p className="main-text text-center pt-5">It’s easy to get started. Sign up for free.</p>
                    <p className="sub-text text-center">Create your account and receive trial credits or get in touch with us</p>
                    <Button className="content-button px-3 py-2 mr-2">TALK TO AN EXPERT</Button>
                    <Button className="content-button px-3 py-2  ml-2">TALK TO AN EXPERT</Button>
                </div>
            </div>
        );
    }
}