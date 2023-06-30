import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";

function NavbarLandingPage() {
  return (
    <Navbar expand="lg" className="fixed-top nav_jualan" style={{ backgroundColor: '#ffb3c6'}} >
      <Container className="container">
        <Navbar.Brand href="#" ><b style={{ color: 'white'}} >SobatEtawa</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
          </Nav>
           <div className="link_navbar">
              {/* <a href='#about'>About</a> */}
              <a href='#manfaat'>Manfaat</a>
              <a href='#kandungan'>Kandungan</a>
              <a href='#order'>Order</a>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLandingPage;
