import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import gerencia from '../imgs/gerencia.png';

function Navbary() {
return(
    <div>
        <Navbar className='barranav'>
        <Container>
          <Navbar.Brand href="/"><img src={gerencia} alt="" /></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#funcoes">Funcionalidade</Nav.Link>
            <Button variant="light" href='/login'>Acessar</Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
)
}

export default Navbary