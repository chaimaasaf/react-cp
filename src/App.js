import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import may1 from "./may1.jpg";
import may2 from "./may2.jpg";
import ziko from "./ziko.jpg";
function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">LOGO</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <div
          lc-helper="background"
          className="container-fluid py-5 mb-4 d-flex justify-content-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1124&amp;q=100)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="p-5 mb-4 lc-block col-xxl-7 col-lg-8 col-12"
            style={{
              backdropFilter: "blur(6px) saturate(102%)",
              WebkitBackdropFilter: "blur(6px) saturate(102%)",
              backgroundColor: " rgba(255, 255, 255, 0.45)",
              borderRadius: "12px",
              border: "1px solid rgba(209, 213, 219, 0.3)",
            }}
          >
            <div className="lc-block">
              <div editable="rich">
                <h2 className="fw-bolder display-3">Welcome</h2>
              </div>
            </div>
            <div className="lc-block col-md-8">
              <div editable="rich">
                <p className="lead">
                  This is Chaima first react application web
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <Card style={{ width: "22rem", margin: "5%" }}>
          <Card.Img variant="top" src={may1} />
          <Card.Body>
            <Card.Title>MAY 1</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: "22rem", margin: "5%" }}>
          <Card.Img variant="top" src={ziko} />
          <Card.Body>
            <Card.Title>Ziko 2</Card.Title>
          </Card.Body>
        </Card>

        <Card style={{ width: "22rem", margin: "5%" }}>
          <Card.Img variant="top" src={may2} />
          <Card.Body>
            <Card.Title>May 3</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default App;
