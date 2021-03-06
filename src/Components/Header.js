import React from 'react';
import{Navbar} from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import Marquee from "react-easy-marquee";
import "./Header.css";
import {Container} from 'react-bootstrap';

function Header() {
    return (
        <div>
           <Navbar className= "custom1" variant="dark">
           <Marquee duration={10000}>
             <h1 style={{color:'aliceblue'}}>Admission Open for 2022-23
              </h1> 

           </Marquee>
           <Button href="/Adminlogin" className="button" variant="primary"  active>Admin LogIn</Button>
          
           </Navbar>
            
         
  
 

            <Navbar className="custom" variant="dark">
   
      <Navbar.Brand href="/">
        <img
          alt=""
          src="\Images\logo.png"
          width="200"
          height="180"
          className="d-inline-block align-top"
        />{' '}
     </Navbar.Brand>
     <Container>
         <div className="middle">
         <h1 className="text1">Mother Teresa Modern Public School</h1>
         
         <h2 className="text2">Affiliated to C.B.S.E. Board</h2>
         <h4 className="text3">Ladwa Road, Ladwa(Kurukshetra)</h4>
</div>

     </Container>
</Navbar>

  <Navbar className= "custom1" variant="dark">
 

   <Nav className="nav">
       
      <Nav.Link href="/" className="navtext">Home</Nav.Link>
      <NavDropdown title="AboutSchool" id="basic-nav-dropdown" className="navtext">
      <NavDropdown.Item href="/AboutUs" > AboutUs </NavDropdown.Item>
      <NavDropdown.Divider />
          <NavDropdown.Item href="/AimsandObjective">Aims and Objective</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/Directormessage">Managing Director's Message</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/Principaldesk">From Prinicipal Desk</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/Faculty">Faculty</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/Infrastructure">Infrastucture</NavDropdown.Item>
          <NavDropdown.Divider />
</NavDropdown>
     <NavDropdown title="Student Corner" id="basic-nav-dropdown" className="navtext">
      <NavDropdown.Item href="/Activities">Activities</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/Syllabus">Syllabus</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/Holiday">Holidays</NavDropdown.Item>
          <NavDropdown.Divider />
          </NavDropdown>
      
          <NavDropdown title="MediaRoom" id="basic-nav-dropdown" className="navtext">
      <NavDropdown.Item href="/Snapshots">Snapshots</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/PrintMedia">Print Media Coverage</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/SocialMedia">Social Media Coverage</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/Achievements">Achievements</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/Download">Download Section</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/Updates">Updates</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/NCC">NCC</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/Videos">Videos</NavDropdown.Item>
          <NavDropdown.Divider />
          </NavDropdown>
      <Nav.Link href="/Career" className="navtext">Career</Nav.Link>
      <Nav.Link href="/Admission" className="navtext">Admission Inquiry</Nav.Link>
      <Nav.Link href="/Contact" className="navtext">Contact Us</Nav.Link>
            
            <NavDropdown title="School Documents" id="basic-nav-dropdown" className="navtext">
     
          <NavDropdown.Item href="/GeneralInformation">General Information</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/Documents">Documents and Information</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/Results">Results and Academics</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/StaffTeaching">Staff Teaching</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/SchoolInfrastructure">School Infrastructure</NavDropdown.Item>
          <NavDropdown.Divider />
         
          </NavDropdown>
            <Nav.Link onClick={() => {
              // https://docs.google.com/document/d/15kaFmzfRxkRm-a8UwiKTrzjaajzp0TRZ1DcgvylaPsI/edit?usp=sharing
              const win = window.open("https://docs.google.com/document/d/15kaFmzfRxkRm-a8UwiKTrzjaajzp0TRZ1DcgvylaPsI/edit?usp=sharing", "_blank");
              win.focus();
            }} href="/" className="navtext">Mandatory Public Disclosure</Nav.Link>
    </Nav>
   
  
  </Navbar>
  <hr/>
        </div>
    )
}

export default Header
