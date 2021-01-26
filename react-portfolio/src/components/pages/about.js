import React from "react";
import Container from "../src/components/container";
import Row from "../src/components/row";
import Col from "../src/components/col";
import Button from "./button";

function About() {
    return (
        <div>
            <Container>
                <Row>
                    <Col size="md-6">
                        <img class="img"
                            src="./assets/me3.jpg
                            alt="Suzanne Givnish" height="650" width="500">
                        </img>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        
                      
                        <br></br>
                        <p>
                            Philadelphia-based Frontend Web Developer who likes to spend much of her time with her family, friends, boyfriend & pup.
                        </p>
                        <p>I've always been curious - curious to detail, to the way things work, to the way people work, and especially to how others work together. 
                        </p>
                        <p>
                        As a web developer, combining this curiosity and the love I have for working collaboratively with others is revealed through the work I produce. As you will see, each project is created with close attention to detail and full consideration of the end-user.
                        </p>
                    </Col>
                </Row>
                <Button>
                </Button>
            </Container>
        </div>
    );
}

export default About
