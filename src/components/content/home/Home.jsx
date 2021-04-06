import React from 'react';
import './Home.css';
import { Row, Col, Button, Card } from 'react-bootstrap';
import wavemeLogo from '../../../assets/images/waveme-Logo.png';
import data from './HomeData';

const COMMUNICATION_LOGOS = {
    "waveme": { label: "SMS API Platform", image: require('../../../assets/images/waveme-Logo.png') },
    "addwave": { label: "voice API Platform", image: require('../../../assets/images/waveme-Logo.png') },
    "techwave": { label: "Zentrunk", image: require('../../../assets/images/waveme-Logo.png') },
}

export default class Home extends React.Component {
    render() {
        return (
            <div className="content">
                <Row xs="1" md="2" className="m-0">
                    <Col className="p-0">
                        <p className="main-text">
                            Skynaut is the Momentum Leader in Cloud Communications
                            </p>
                        <p className="sub-text">
                            Ranked #1 for customer satisfaction in the G2's Cloud Communications category, with over 98% of customers rating Plivo at 4.5 or 5 stars.
                            </p>
                        <Button className="content-button px-3 py-2">TALK TO AN EXPERT</Button>
                    </Col>
                    <Col className="p-0"></Col>
                </Row>
                <div className="communications-container">
                    <p className="main-text text-center">
                        Enterprise grade communications stack for your business
                        </p>
                    <Row className="m-0" xs="1" md="3">
                        {data.COMMUNICATIONS.map((communicate, communicateIdx) =>
                            <Col className="p-2" key={communicateIdx}>
                                <Card className="communicate-card p-3">
                                    <Card.Body className="p-0">
                                        <Row className="m-0">
                                            <Col xs="2" className="p-0 data-v-center">
                                                <img src={COMMUNICATION_LOGOS[communicate.key].image.default} alt={COMMUNICATION_LOGOS[communicate.key].label} title={COMMUNICATION_LOGOS[communicate.key].label} height="80%" width="80%" />
                                            </Col>
                                            <Col xs="10" className="p-0 pl-3 data-v-center">
                                                <p className="card-title">{communicate.title}</p>
                                            </Col>
                                        </Row>
                                        <Row className="m-0">
                                            <Col className="p-0">
                                                {communicate.description}
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
                <Row className="m-0">
                    <Col className="p-2">
                        <Card className="entire-single-card py-3">
                            <Row className="m-0">
                                <Col className="p-0 pl-3 data-v-center" xs="1">
                                    <img src={wavemeLogo} alt="phlo-icon" title="phlo-icon" width="70%" height="80%" />
                                </Col>
                                <Col className="p-0 pl-1 data-v-center" xs="1">AdVertex</Col>
                                <Col className="p-0 pl-4 data-v-center" xs="10">
                                    <span>Drag. Drop. Deploy to manage your communication workflows visually</span>
                                    <span className="pl-5 learn-more">Learn More <i className="fa fa-angle-double-right" /></span>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row className="m-0">
                    <Col className="p-2">
                        <Card className="entire-single-card py-3">
                            <Row className="m-0">
                                <Col className="p-0 pl-3 data-v-center" xs="1">
                                    <img src={wavemeLogo} alt="phlo-icon" title="phlo-icon" width="70%" height="80%" />
                                </Col>
                                <Col className="p-0 pl-1 data-v-center" xs="1">DigitalStudio</Col>
                                <Col className="p-0 pl-4 data-v-center" xs="10">
                                    <span>Drag. Drop. Deploy to manage your communication workflows visually</span>
                                    <span className="pl-5 learn-more">Learn More <i className="fa fa-angle-double-right" /></span>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <div className="mt-3">
                    <p className="main-text text-center pt-5">
                        Explore our solutions templates
                        </p>
                    <Row className="m-0" xs="1" md="3">
                        {data.EXPOLORE_SOLUTIONS.map((expsol, expsolIdx) =>
                            <Col className="px-2 py-4" key={expsolIdx}>
                                <Card className="solution-card p-3">
                                    <Card.Body className="p-0">
                                        <p className="mb-2 text-left"><img src={wavemeLogo} alt="phlo-icon" title="phlo-icon" width="15%" height="15%" /></p>
                                        <p className="card-title">{expsol.title}</p>
                                        <p>{expsol.description}</p>
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
                                        <p className="mb-2 text-left"><img src={wavemeLogo} alt="phlo-icon" title="phlo-icon" width="10%" height="10%" /></p>
                                        <p className="card-title">{topReason.title}</p>
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