import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Marquee from "react-easy-marquee";
import { FaBriefcase } from "react-icons/fa";
import { FaFont} from "react-icons/fa";
import {FaHSquare} from "react-icons/fa";
import {FaRegAddressCard} from "react-icons/fa";
import { Col } from 'react-bootstrap';
import{Button} from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import "./Home.css";

function Home() {
  const images = ["Images/schoolactivity.png",  "Images/schoolholiday.png", "Images/welcomeschool.png", "Images/image6.png"];
    return (
      <>
      <div className="background">
        <div className="Main">
       <Container fluid>
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
                    src="https://firebasestorage.googleapis.com/v0/b/motherteresa-d7f08.appspot.com/o/assets%2Fimage1.png?alt=media&token=c541cda3-325b-4051-af70-f60376566d9b"
      alt="First slides"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
                    src="https://firebasestorage.googleapis.com/v0/b/motherteresa-d7f08.appspot.com/o/assets%2Fimage2.png?alt=media&token=2322ca11-881a-43b2-ae58-bc9e34c3d7cb"
      alt="Second slides"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
                    src="https://firebasestorage.googleapis.com/v0/b/motherteresa-d7f08.appspot.com/o/assets%2Fimage3.png?alt=media&token=12432503-cc7e-493f-a651-b62afe990530"
      alt="Third slides"
    />
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100"
                    src="https://firebasestorage.googleapis.com/v0/b/motherteresa-d7f08.appspot.com/o/assets%2Fimage4.png?alt=media&token=f7308206-3924-4684-8a6a-acdba62349df"
      alt="Third slides"
    />
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100"
                    src="https://firebasestorage.googleapis.com/v0/b/motherteresa-d7f08.appspot.com/o/assets%2Fimage5.png?alt=media&token=80ed86c5-6fd9-4c18-9b4e-865516f19ee6"
      alt="Third slides"
    />
    </Carousel.Item>
</Carousel>
</Container>
        </div>
  <div className="Main2">
  <CardGroup className="cardgroup" >
    <a href="/Activities">
  <Card className="cards">
   <Card.Img className="image" variant="top" src="/Images/Activity.jpg" />
   
  </Card>
</a>

<a href="/Onlinefee">
  <Card className="cards">
    <Card.Img className="image" variant="top" src="/Images/onlinefee.jpg" />
  
  </Card>
  </a>
 
  <a href="/Syllabus">
  <Card className="cards">
    <Card.Img className="image" variant="top" src="/Images/Syllabus.jpg" />
   
  </Card>
  </a>
  <a href="Achievements">
  <Card className="cards">
    <Card.Img className="image" variant="top" src="/Images/Achievement.jpg" />
   
  </Card>
  </a>

</CardGroup>
    </div> 
    <div className="Main3">
    
      <h1 className="aboutus">About Us</h1>
  <Row className="row">
  <Col>
                <img className="Image2" src="https://firebasestorage.googleapis.com/v0/b/motherteresa-d7f08.appspot.com/o/assets%2FAboutus.jpg?alt=media&token=372b4651-468f-4d9f-aede-9a46db200503" alt="AboutUS" />
    </Col>
    <Col>
    <p className="para">
    Mother Teresa Modern Public School is a premier educational institution of the region ,<p>Established by Major R.S Chahal city magistrate in the year 1999.</p>The School is affiliated to Central Board of Secondary Education,Delhi upto Secondary Level.
    </p>
    <Button href="/AboutUs" variant="danger" size="lg" active>
    Know More
  </Button>{' '}
    </Col>
  
    <Col>
                <img className="Image2" src="https://firebasestorage.googleapis.com/v0/b/motherteresa-d7f08.appspot.com/o/assets%2Fimage6.png?alt=media&token=67fdb24f-c29c-443b-9724-19a1f9f08a0b" alt="AboutUS" />
    <div className="session"><h4 className="text6">For session 2021-2022</h4></div>
    </Col>
  </Row>
  </div>   
      <div className="Main4">
<h1 style={{fontSize:'60px',textAlign:'center',color: '#ffffff', fontweight: '500', lineheight: '64px', margin: '0 0 0', padding: '20px 30px', textalign: 'center', texttransform: 'uppercase',background:'#281931'}}>Few Updates:</h1>
<div className="sec-Div">
<Marquee duration={10000} background="#fafafa" height="350px">
       
        {images.map((image) => (
          <img src={image} alt="picsum" />
        ))}
       </Marquee>
    
      <Marquee duration={10000} background="#fafafa" height="100px">
       <div className="board">
         <h1 className="Bulletin">BULLETIN BOARD (2021-2022)</h1>
       </div>
        </Marquee>
   </div>
</div>  
<div className="Main7">
<CardGroup className="cardgroup">
  <Card className="card2">
    <Card.Img className="image6" variant="top" src="\Images\academic.jpg "/>
    <Card.Body>
      <Card.Title className="title">ACADEMIC</Card.Title>
      <Card.Text className="cardtext">
         Our School has well experienced faculty
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><Button href="/Academic" variant="danger" size="lg" active>
    Know More
  </Button></small>
    </Card.Footer>
  </Card>
  <Card className="card2">
    <Card.Img className="image6" variant="top" src="\Images\infrastructure.jpg " />
    <Card.Body>
      <Card.Title className="title">INFRASTRUCTURE</Card.Title>
      <Card.Text className="cardtext">
      Our School have well infrastructure
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><Button href="/Infrastructure" variant="danger" size="lg" active>
    Know More
  </Button></small>
    </Card.Footer>
  </Card>
  <Card className="card2">
    <Card.Img className="image6" variant="top" src="\Images\mediaroom.jpg " />
    <Card.Body>
      <Card.Title className="title">MEDIAROOM</Card.Title>
      <Card.Text className="cardtext">
      find all latest snapshots, videos, social media coverage
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><Button href="/Mediaroom" variant="danger" size="lg" active>
    Know More
  </Button></small>
    </Card.Footer>
  </Card>
  <Card className="card2">
    <Card.Img className="image6" variant="top" src="\Images\download.png " />
    <Card.Body>
      <Card.Title className="title">DOWNLOAD</Card.Title>
      <Card.Text className="cardtext">
      admission form, Prospectus, Affiliation, and other files 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"><Button href="/Download" variant="danger" size="lg" active>
    Know More
  </Button></small>
    </Card.Footer>
  </Card>
</CardGroup>
</div>
        
 <div className="Main9">
 <div style={{background:"#5c616e", height:"100px"}} >
 <Button href="/career"  className="button" variant="primary" size="lg" active style={{marginLeft:'20px',height:"50px",marginTop:'20px'}}>
    Job Application <FaBriefcase/>
  </Button>
  <Button href="/Alumini" className="button" variant="primary" size="lg" active style={{marginLeft:'20px',height:"50px",marginTop:'20px'}}>
    Alumini <FaFont/>
  </Button>
  <Button href="/OurStaff" className="button" variant="primary" size="lg" active style={{marginLeft:'20px',height:"50px",marginTop:'20px'}}>
   Our Staff <FaRegAddressCard/>
  </Button>
  <Button href="/Helpdesk" className="button" variant="primary" size="lg" active style={{marginLeft:'20px',height:"50px",marginTop:'20px'}}>
  helpdesk <FaHSquare/>
  </Button>
        </div>



   </div>      
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
   </div>
       
        </>
    )
}

export default Home
