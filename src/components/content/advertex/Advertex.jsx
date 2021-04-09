import React from 'react';
import './Advertex.css';
import { Row, Col, Button, Card } from 'react-bootstrap';
import data from './AdvertexData';
import wavemeLogo from '../../../assets/images/waveme-Logo.png';
import bulbImg from '../../../assets/images/bulb.svg';
import globeRadarSmall from '../../../assets/images/radar-1.svg';
import globeRadarMedium from '../../../assets/images/radar-2.svg';

const INNER_TABS_IMGS = {
    "PUBLISH": { lable: "Publish", image: require('../../../assets/images/advertex-inner-tab-publish.png') },
    "MEASURE": { lable: "Measure", image: require('../../../assets/images/advertex-inner-tab-measure.png') },
    "ENGAGE": { lable: "Engage", image: require('../../../assets/images/advertex-inner-tab-engage.png') },
    "MONETIZE": { lable: "Monetize", image: require('../../../assets/images/advertex-inner-tab-monetize.png') },
}

export default class Advertex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeInnerTab: 'PUBLISH',
        }
    }
    render() {
        const { activeInnerTab } = this.state;
        let tabs = Object.keys(data.ALL_IN_ONE_SIMPLE).map(tab => {
            return {
                label: tab,
                key: tab,
            }
        })
        return (
            <div className="advertex-component">
                <div className="content-section">
                    <Row className="m-0 pt-4 mt-4" xs="1" md="2">
                        <Col className="p-0 data-v-center ">
                            <div>
                                <h1 className="maintext">
                                    Centrally manage and measure your social media campaigns in one easy-to-adopt platform that is built for change.
                                </h1>
                                <h2 className="subtext my-4">
                                    We help brands harness the power of human connection across every digital interaction to stay all-ways connected.
                                </h2>
                                <Button className="content-button px-3 py-2">TALK TO AN EXPERT</Button>
                            </div>
                        </Col>
                        <Col className="p-0">
                            <div className="banner-animation-container">
                                <div className="globe-pulse"></div>
                                <div className="radar-container radar-container-small">
                                    <img src={globeRadarSmall} alt="radar-small" title="radar-small" className="radar-small" />
                                </div>
                                <div className="radar-container radar-container-medium">
                                    <img src={globeRadarMedium} alt="radar-medium" title="radar-medium" className="radar-medium" />
                                </div>
                                <div className="rocket-container">
                                    <div className="rocket"></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="content-section">
                    <h1 className="maintext text-center pt-4 mt-5">
                        One solution for all your Advertex
                    </h1>
                    <h2 className="subtext text-center my-3">
                        No matter the size of your challenge, we have you completely covered.
                    </h2>
                    <Row className="m-0 mt-5" xs="1" md="1">
                        <Col className="p-0 text-center data-vh-center">
                            {data.ONE_SOLUTION_ADVERTEX.map((card, cardIdx) =>
                                cardIdx === 0 &&
                                <div key={cardIdx} className="one-solution-advertex-card ">
                                    <h5 className="card-title">{card.title}</h5>
                                    <small>{card.description}</small>
                                </div>
                            )}
                        </Col>
                        <Col className="p-0">
                            <Row className="m-0" xs="1" md="3">
                                <Col className="p-0 text-right ">
                                    <Row className="m-0 pr-3" xs="1" md="1">
                                        {data.ONE_SOLUTION_ADVERTEX.map((card, cardIdx) =>
                                            (cardIdx !== 0 && cardIdx !== 3 && cardIdx !== 4 && cardIdx !== 5 && cardIdx !== 6 && cardIdx !== 7) &&
                                            <Col className="p-0 py-3" key={cardIdx}>
                                                <h5 className="card-title">{card.title}</h5>
                                                <small>{card.description}</small>
                                            </Col>
                                        )}
                                    </Row>
                                </Col>
                                <Col className="p-0 text-center one-solution-img-container">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div className="p-2 ">
                                        <img src={bulbImg} alt="bulb" title="bulb" height="250" width="300" />
                                    </div>
                                </Col>
                                <Col className="p-0 text-left ">
                                    <Row className="m-0 pl-3" xs="1" md="1">
                                        {data.ONE_SOLUTION_ADVERTEX.map((card, cardIdx) =>
                                            (cardIdx !== 0 && cardIdx !== 1 && cardIdx !== 2 && cardIdx !== 5 && cardIdx !== 6 && cardIdx !== 7) &&
                                            <Col className="p-0 py-3" key={cardIdx}>
                                                <h5 className="card-title">{card.title}</h5>
                                                <small>{card.description}</small>
                                            </Col>
                                        )}
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="p-0">
                            <Row className="m-0">
                                <Col className="p-0 pr-3 text-right">
                                    {data.ONE_SOLUTION_ADVERTEX.map((card, cardIdx) =>
                                        cardIdx === 5 &&
                                        <div key={cardIdx} className="one-solution-advertex-card ">
                                            <h5 className="card-title">{card.title}</h5>
                                            <small>{card.description}</small>
                                        </div>
                                    )}
                                </Col>
                                <Col className="p-0 pl-3 text-left">
                                    {data.ONE_SOLUTION_ADVERTEX.map((card, cardIdx) =>
                                        cardIdx === 6 &&
                                        <div key={cardIdx} className="one-solution-advertex-card ">
                                            <h5 className="card-title">{card.title}</h5>
                                            <small>{card.description}</small>
                                        </div>
                                    )}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className="content-section">
                    <h1 className="maintext text-center pt-4 mt-5">
                        AI-Powered Social Media Marketing
                    </h1>
                    <h2 className="subtext text-center my-3">
                        The advertexplatform is the go-to place to manage all your marketing tasks together easier
                    </h2>
                    <Row className="m-0" xs="1" md="3">
                        {data.AI_POWERED_MARKETING.map((card, cardIdx) =>
                            <Col className="px-2 py-4" key={cardIdx}>
                                <Card className="ai-powered-card p-3">
                                    <Card.Body className="p-0">
                                        <p className="text-left"><img src={wavemeLogo} alt="waveme-icon" title="waveme-icon" width="12%" height="12%" /></p>
                                        <p className="card-title mt-4">{card.title}</p>
                                        <p className="mt-4">{card.description}</p>
                                    </Card.Body>
                                    <Card.Footer><p className="m-0 learn-more text-right">Learn More <i className="fa fa-angle-double-right" /></p></Card.Footer>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </div>
                <div className="content-section">
                    <h1 className="maintext text-center pt-4 mt-5">
                        Tools, all in one simple platform
                    </h1>
                    <h2 className="subtext text-center my-3">
                        Maximize content visibility, measure the true impact of social, create engaging customer experiences and tie advertex to your companies bottom line.
                    </h2>
                    <div>
                        <Row className="m-0 mb-5 mt-4" xs="4" md="4">
                            {tabs.map((tab, tabIdx) =>
                                <Col className="p-0 text-center" key={tabIdx}>
                                    <p className={`${activeInnerTab === tab.label ? 'active-inner-tab' : 'inner-tabs'} m-0 p-3 card-title`} onClick={() => this.setState({ activeInnerTab: tab.label })}>{tab.label}</p>
                                </Col>
                            )}
                        </Row>
                        <Row className="m-0 " xs="1" md="2">
                            <Col className="p-0">
                                <div className="py-4 inner-tabs-image-container">
                                    <img src={INNER_TABS_IMGS[activeInnerTab].image.default} alt={INNER_TABS_IMGS[activeInnerTab].label} title={INNER_TABS_IMGS[activeInnerTab].label} height="250" width="350" />
                                </div>
                            </Col>
                            <Col className="p-0 pl-4 data-v-center">
                                <div>
                                    <p className="card-title">{data.ALL_IN_ONE_SIMPLE[activeInnerTab].title}</p>
                                    <p className="mt-3">{data.ALL_IN_ONE_SIMPLE[activeInnerTab].description}</p>
                                    <p className="m-0 learn-more text-left">Learn More <i className="fa fa-angle-double-right" /></p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="content-section">
                    <h1 className="maintext text-center pt-4 mt-5">
                        Best-in-class social media marketing technology to
                    </h1>
                    <Row className="m-0" xs="1" md="3">
                        {data.BEST_IN_CLASS.map((card, cardIdx) =>
                            <Col className="px-2 py-4" key={cardIdx}>
                                <Card className="bestinclass-card p-3">
                                    <Card.Body className="p-0">
                                        <p className="text-left"><img src={wavemeLogo} alt="waveme-icon" title="waveme-icon" width="12%" height="12%" /></p>
                                        <p className="card-title mt-4">{card.title}</p>
                                        <p className="mt-4">{card.description}</p>
                                    </Card.Body>
                                    <Card.Footer><p className="m-0 learn-more text-right">Learn More <i className="fa fa-angle-double-right" /></p></Card.Footer>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </div>
                <div className="my-5 text-center content-section">
                    <h1 className="maintext text-center pt-4 m-0">It’s easy to get started. Sign up for free.</h1>
                    <h2 className="subtext text-center py-4">Create your account and receive trial credits or get in touch with us</h2>
                    <Button className="content-button px-3 py-2 mr-2">GET STARTED NOW</Button>
                    <Button className="content-button px-3 py-2  ml-2">TALK TO AN EXPERT</Button>
                </div>
            </div >
        );
    }
}