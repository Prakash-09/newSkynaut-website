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
    constructor(props) {
        super(props);

        this.state = {
            activeExplorePlatform: 'blockout',
        }
    }

    handleExplorePlatformCard(platform) {
        let val = platform.key
        this.setState({ activeExplorePlatform: val })
    }
    render() {
        let { activeExplorePlatform } = this.state
        return (
            <div className="content">
                <Row xs="1" md="2" className="content-section m-0 mt-5">
                    <Col className="p-0 data-v-center">
                        <div>
                            <h1 className="maintext">
                                Skynaut is the leader in democratization of hyper local digital marketing
                                </h1>
                            <h2 className="subtext my-4">
                                Radically accelerate your digital marketing journey for your enterprises at scale.
                                </h2>
                            <Button className="content-button px-3 py-2">TALK TO AN EXPERT</Button>
                        </div>
                    </Col>
                    <Col className="p-0 data-vh-center">
                        <div className="banner-animation-container">
                            <div className="globe-pulse"></div>
                            <div className="radar-container radar-container-small">
                                <img src={globeRadarSmall} alt="radar-small" title="radar-small" className="radar-small" />
                            </div>
                            <div className="radar-container radar-container-medium">
                                <img src={globeRadarMedium} alt="radar-medium" title="radar-medium" className="radar-medium" />
                            </div>
                            <div className="globe ">
                                <div className="globe-map"></div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="backgound-shade pt-3">
                    <Row className="content-section m-0">
                        <Col>
                            <h1 className="maintext text-center">
                                Enterprise grade digital marketing stack for your business
                            </h1>
                        </Col>
                    </Row>
                    <Row className="content-section m-0 mt-3" xs="1" md="3">
                        {data.BUSINESS_SITES.map((businessSite, businessSiteIdx) =>
                            <Col className="p-2" key={businessSiteIdx}>
                                <Card className="businessSite-card p-3">
                                    <Card.Body className="p-0">
                                        <Row className="m-0">
                                            <Col sm="auto" className="p-0 pr-3 businessSite-card-img-data-col">
                                                <div>
                                                    <img src={COMMUNICATION_LOGOS[businessSite.key].image.default} alt={COMMUNICATION_LOGOS[businessSite.key].label} title={COMMUNICATION_LOGOS[businessSite.key].label} width="30" height="30" />
                                                </div>
                                            </Col>
                                            <Col className="p-0 businessSite-card-img-data-col">
                                                <p className="card-title">{businessSite.title}</p>
                                            </Col>
                                        </Row>
                                        <Row className="m-0">
                                            <Col className="p-0">
                                                <p className="m-0 mt-2">{businessSite.description}</p>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    <Card.Footer>
                                        <p className="m-0 mt-3 learn-more text-right">Learn More <i className="fa fa-long-arrow-right" /></p>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        )}
                    </Row>
                    <Row className="content-section m-0" xs="1">
                        {data.BUSINESS_SITES_SPECIAL_CARDS.map((specialCard, specialCardIdx) =>
                            <Col className="p-2" key={specialCardIdx}>
                                <Card className="entire-single-card p-3">
                                    <Card.Body className="p-0 data-v-center">
                                        <Row className="m-0 data-v-center">
                                            <Col className="p-0 pr-3" sm="auto">
                                                <img src={wavemeLogo} alt="waveme-icon" title="waveme-icon" width="30" height="30" />
                                            </Col>
                                            <Col className="p-0 pr-3" sm="auto">
                                                <h1 className="card-title ">{specialCard.title}</h1>
                                            </Col>
                                            <Col className="p-0 pr-3" >
                                                <span>{specialCard.description}</span>
                                            </Col>
                                            <Col className="p-0  text-right" sm="auto">
                                                <span className="learn-more">Learn More <i className="fa fa-long-arrow-right" /></span>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </div>
                <Row className="content-section m-0 mt-5">
                    <Col>
                        <h1 className="maintext text-center pt-4">Explore our platform</h1>
                        <h2 className="subtext text-center pt-4">Our vision is to offer a trustworthy wave apps and digital platform that provides unparalleled hyper local services to enterprises powered by tokenized equity with wavecoin.</h2>
                    </Col>
                </Row>
                <Row className="m-0 mt-3 content-section" xs="1" md="2">
                    <Col className="p-0 pt-2 data-v-center">
                        <Row className="m-0" xs="1">
                            {data.EXPOLORE_PLATFORM.map((expPlatform, expPlatformIdx) =>
                                <Col className="p-0 p-2" key={expPlatformIdx}>
                                    <Card className={`${activeExplorePlatform === expPlatform.key ? 'active-explore-platform-card' : 'explore-platform-card'} py-2 pr-2 pl-0`}
                                        onClick={this.handleExplorePlatformCard.bind(this, expPlatform)}
                                    >
                                        <Row className="m-0">
                                            <Col className="p-3 data-vh-center" sm="auto">
                                                <img src={wavemeLogo} alt="waveme-icon" title="waveme-icon" width="30" height="30" />
                                            </Col>
                                            <Col className="p-0">
                                                <p className="m-0 explore-platform-card-title">{expPlatform.title}</p>
                                                <p className='explore-platform-card-desc m-0'>{expPlatform.description}</p>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            )}
                        </Row>
                    </Col>
                    <Col className="p-0 pt-2">
                        <img src={explorePlotformImg} alt="explore-plotform" title="explore-plotform" height="100%" width="100%" />
                    </Col>
                </Row>
                <div className="backgound-shade">
                    <Row className="m-0 content-section">
                        <Col>
                            <h1 className="maintext text-center pt-4">
                                Explore our business services
                            </h1>
                        </Col>
                    </Row>
                    <Row className="m-0 mt-3 content-section" xs="1" md="3">
                        {data.EXPOLORE_BUSINESS_SERVICES.map((businessService, businessServiceIdx) =>
                            <Col className="px-2 py-4" key={businessServiceIdx}>
                                <Card className="business-service-card p-3">
                                    <Card.Body className="p-0">
                                        <p className="text-left"><img src={wavemeLogo} alt="waveme-icon" title="waveme-icon" width="30" height="30" /></p>
                                        <p className="card-title mt-4">{businessService.title}</p>
                                        <p className="mt-4">{businessService.description}</p>
                                    </Card.Body>
                                    <Card.Footer><p className="m-0 learn-more text-right">Learn More <i className="fa fa-long-arrow-right" /></p></Card.Footer>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </div>
                <Row className="m-0 mt-5 content-section">
                    <Col className="p-0">
                        <h1 className="maintext text-center pt-4">Where Skynaut makes a Difference</h1>
                    </Col>
                </Row>
                <Row className="m-0 mt-3 content-section" xs="1" md="2">
                    {data.TOP_REASONS.map((topReason, topReasonIdx) =>
                        <Col className="px-2 py-4" key={topReasonIdx}>
                            <Card className="topReason-card p-3">
                                <Card.Body className="p-0">
                                    <p className="text-left"><img src={wavemeLogo} alt="waveme-icon" title="waveme-icon" width="30" height="30" /></p>
                                    <p className="card-title mt-2">{topReason.title}</p>
                                    <p className="mt-4">{topReason.description}</p>
                                </Card.Body>
                                <Card.Footer>
                                    <p className="m-0 learn-more text-right" >Learn More <i className="fa fa-long-arrow-right" /></p>
                                </Card.Footer>
                            </Card>
                        </Col>
                    )}
                </Row>
                <Row className="mt-5 text-center content-section">
                    <Col className="p-0">
                        <h1 className="maintext text-center pt-4 m-0">It’s easy to get started. Sign up for free.</h1>
                        <h2 className="subtext text-center py-4">Create your account and receive trial credits or get in touch with us</h2>
                        <Button className="content-button px-3 py-2 mr-2">GET STARTED NOW</Button>
                        <Button className="content-button px-3 py-2  ml-2">TALK TO AN EXPERT</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}