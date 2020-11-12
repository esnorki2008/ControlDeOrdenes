import react from 'react'
import { Button, Form, Navbar, Nav } from 'react-bootstrap';


function Naveg(props) {
    return (
        <div>
            
            <div >


                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                    <Form inline>
                        <h5>Articulos En El Carro </h5>
                        <h3> : { 50 }</h3>
                        
                        <Button variant="outline-light">Mi Catalogo</Button>
                    </Form>
                </Navbar>
            </div>
        </div>

    )
}



export default Naveg
