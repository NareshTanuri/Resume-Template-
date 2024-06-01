import React from "react";
import { Row, Col, Container, Card, ProgressBar } from "react-bootstrap";
import './NaresshResume.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyImage from '../assets/yourImage.jpg';
import YouTube from '../assets/youtube.png';
import Nakuri from '../assets/Nakuri.jpg';
import Linkdin from '../assets/linkedin.png';
import Github from '../assets/github.png';

const YourResume = () => {
    return (
        <Container>
            <Card className="Card__Body">
                <Card.Body>
                    <Row>
                        <Col sm={12}>
                            <Card className="Card__Header">
                                <Card.Body>
                                    <Row>
                                        <Col md={8}>
                                            <h2>Your Name</h2>
                                            <hr />
                                            <h4>SUMMARY <span className="bar__displaying"></span></h4>
                                            <p>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum animi cumque beatae obcaecati doloribus eligendi aliquam consequuntur molestias delectus, consectetur minima hic a, porro reprehenderit, dolore placeat repellendus voluptatem repudiandae!
                                            </p>
                                            <hr />
                                            <h4>EXPERIENCE <span className="bar__displaying"></span></h4>
                                            <p><strong>Full Stack Developer</strong></p>
                                            <p className="h6">Your Comapany </p>
                                            <ul className="mt-3">
                                                <li className="mt-1"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum animi cumque beatae obcaecati doloribus eligendi aliquam consequuntur molestias delectus, consectetur minima hic a, porro reprehenderit, dolore placeat repellendus voluptatem repudiandae!
                                                </li>
                                                <li className="mt-1"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum animi cumque beatae obcaecati doloribus eligendi aliquam consequuntur molestias delectus, consectetur minima hic a, porro reprehenderit, dolore placeat repellendus voluptatem repudiandae!
                                                </li>
                                                <li className="mt-1"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum animi cumque beatae obcaecati doloribus eligendi aliquam consequuntur molestias delectus, consectetur minima hic a, porro reprehenderit, dolore placeat repellendus voluptatem repudiandae!
                                                </li>
                                            </ul>
                                            <h4>Current <span className="bar__displaying"></span></h4>
                                            <p className="h6">Your Comapny and Company Location</p>
                                            <ul className="mt-3">
                                                <li className="mt-1"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum animi cumque beatae obcaecati doloribus eligendi aliquam consequuntur molestias delectus, consectetur minima hic a, porro reprehenderit, dolore placeat repellendus voluptatem repudiandae!
                                                </li>
                                                <li className="mt-1"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum animi cumque beatae obcaecati doloribus eligendi aliquam consequuntur molestias delectus, consectetur minima hic a, porro reprehenderit, dolore placeat repellendus voluptatem repudiandae!
                                                </li>
                                                <li className="mt-1"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum animi cumque beatae obcaecati doloribus eligendi aliquam consequuntur molestias delectus, consectetur minima hic a, porro reprehenderit, dolore placeat repellendus voluptatem repudiandae!
                                                </li>
                                            </ul>
                                            <hr />
                                            <h4>EDUCATION <span className="bar__displaying"></span></h4>
                                            <p><strong>Your Degree</strong></p>
                                            <p>Your College</p>
                                            <p><strong>Your Intermediate</strong></p>
                                            <p>Your College</p>
                                            <p><strong>Secondary School Certificate</strong></p>
                                            <p>Your School</p>
                                            <hr />
                                            <h4>Hobbies and Interests <span className="bar__displaying w-50"></span></h4>
                                            <ul>
                                                <li>Your Hobbies</li>
                                                <li>Listening To Music</li>
                                                <li>Reading Books</li>
                                                <li>Traveller </li>
                                            </ul>
                                            <hr />
                                            <h4>Disclaimer <span className="bar__displaying"></span></h4>
                                            <p>I heareby Declare that all the information funished above is true to the best of my knowledge</p>

                                            <div className="d-flex justify-content-between">
                                                <ul className="no-bullets">
                                                    <li className="mt-3">Plase :</li>
                                                    <li className="mt-3">Date :</li>
                                                </ul>
                                                <div className="mt-5 h6" style={{ marginRight: "50px" }}>Your Name</div>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <img src={MyImage} alt="Profile" className="img-fluid rounded-circle" />
                                            <h4 className="mt-3">CONTACT <span className="bar__displaying w-50"></span></h4>
                                            <p>Address: Your Location</p>
                                            <p>Phone:  Your Number</p>
                                            <p>Email: Your Email</p>

                                            <h4>SKILLS <span className="bar__displaying"></span></h4>
                                            <ul>
                                                <li>Frontend:  Your Skills in frontend</li>
                                                <li>Backend: Your Skills in Backend</li>
                                                <li>Database: Your Skills in Sql</li>
                                            </ul>
                                            <hr />
                                            <h4>Projects <span className="bar__displaying w-50"></span></h4>
                                            <ul>
                                                <li>Project 1  : <a href="https://Example" target="_blank">https://Example/ </a></li>
                                                <li className="mt-2">Project 2 :   <a href="https://Example/ " target="_blank" rel="noopener noreferrer">https://Example/ </a></li>
                                            </ul>
                                            <h4>WEBSITES</h4>
                                            <hr />
                                            <h4><img src={Linkdin} alt="Error" width={30} height={30} />&nbsp;&nbsp;LINKDIN <span className="bar__displaying w-25"></span></h4>
                                            <p><a href="https://www.linkedin.com/in/naresh-tanuri-320295257/" target="_blank">https://www.linkedin.com/in/naresh-tanuri-320295257/</a></p>
                                            <hr />
                                            <h4><img src={Github} alt="Error" width={30} height={30} />&nbsp;&nbsp;GITHUB <span className="bar__displaying w-50"></span></h4>
                                            <p><a href="https://github.com/NareshTanuri" target="_blank">https://github.com/NareshTanuri</a></p>
                                            <hr />
                                            <h4><img src={Nakuri} alt="Error" width={40} height={40} />NAKURI  <span className="bar__displaying w-50"></span></h4>
                                            <p><a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target="_blank">https://www.naukri.com/mnjuser/profile?id=&altresid</a></p>
                                            <hr />
                                            <h4><img src={YouTube} alt="Error" width={40} height={40} /> YOUTUBE <span className="bar__displaying w-25"></span></h4>
                                            <p><a href="https://www.youtube.com/channel/UC1GkOlrcnsICGbgNk6AabnA" target="_blank">https://www.youtube.com/channel/UC1GkOlrcnsICGbgNk6AabnA</a></p>
                                            <hr />
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default YourResume;

