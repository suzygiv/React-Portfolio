import React from "react";
import Container from "../src/components/container";
import Row from "../src/components/row";
import Col from "../src/components/col";
import Button from "./button";

function About() {
    return (
        <div>
   <Container>
      <div className ="About">
        <Row>
          <img src="./images/me3.jpg" alt="Me">
            <div class="col-sm-8">
              <h1 class="about">ABOUT</h1>
             <br>
              <div class="about-body">
                <p>Philadelphia-based Frontend Web Developer who likes to spend much of her time with her family, friends, boyfriend & pup.</p> 
          
                <p>I've always been curious - curious to detail, to the way things work, to the way people work, and especially to how others work together. 
          
                <p>As a web developer, combining this curiosity and the love I have for working collaboratively with others is revealed through the work I produce. As you will see, each project is created with close attention to detail and full consideration of the end-user.</p>
              </div>    
            </div>
          </Row>
        </div>
      </div>

    <div className="card border-dark mb-1" style="max-width: 80rem; max-height: 40rem;">
      <div class="card-header">Let's Connect</div>
      <div class="contact-body text-dark">
        <br>
        <p><a href="mailto: suzannegivnish@gmail.com"><i class="far fa-envelope"></i> SUZANNEGIVNISH@GMAIL.COM</a></p>
        <p> <i class="fas fa-phone"></i> (215) 586-1125</p>
        <iframe src="./images/Suzanne-Givnish-Resume.pdf" width="100%" height="300px"></iframe>
        <strong><p>If your browser does not support this PDF, please click here to download: <a href="./images/Suzanne-Givnish-Resume.pdf">Download PDF</a></p></strong>
      </div>
    </div>
    </Container>
}

export default About