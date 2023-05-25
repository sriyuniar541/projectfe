import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";

function NavbarLandingPage() {
  return (
    <Navbar expand="lg" className="fixed-top nav_jualan" style={{ backgroundColor: 'rgba(175, 238, 238,0.5)'}} >
      <Container className="container">
        <Navbar.Brand href="#" style={{ color: 'white',fontSize:'bold'}} >HalloWebsite</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
          </Nav>
           <div className="link_navbar">
              <a href='#about'>About</a>
              <a href='#manfaat'>Manfaat</a>
              <a href='#kandungan'>Kandungan</a>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLandingPage;
