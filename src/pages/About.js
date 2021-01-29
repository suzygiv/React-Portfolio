import React from "react";
import Container from "../components/Container/index";
import Row from "../components/Row/index";
import Col from "../components/Col/index";


function About() {
    return (
        <div>
            <Container>
                <Row>
                    <Col size="md-12"></Col>
                        <img class="img"
                            src="../assets/me3.jpg"
                            alt="Suzanne Givnish" height="300" width="250">
                        </img>
                        <Col size="md-8">
                        <h1>ABOUT</h1>
                        <br/>
                        <p>Philadelphia-based Frontend Web Developer who likes to spend much of her time with her family, friends, boyfriend & pup.</p> 
          
                        <p>I've always been curious - curious to detail, to the way things work, to the way people work, and especially to how others work together.</p> 
              
                        <p>As a web developer, combining this curiosity and the love I have for working collaboratively with others is revealed through the work I produce. As you will see, each project is created with close attention to detail and full consideration of the end-user.</p>    
                            
                    </Col>
                </Row>
           

                 <div className="card border-dark mb-2" div style={{ width: 1000, height: 400}}>
                 <div className="card-header">Let's Connect</div>
                 <div className="contact-body text-dark">
                 <br />
                     <iframe title="resume" src="../assets/Suzanne-Givnish-Resume - Copy.pdf" width="100%" height="300px"></iframe>
                     <strong><p>If your browser does not support this PDF, please click here to download: <a href="../assets/Suzanne-Givnish-Resume.pdf">Download PDF</a></p></strong>
                 </div>
             </div>
            </Container>
        </div>
    );
}

export default About
