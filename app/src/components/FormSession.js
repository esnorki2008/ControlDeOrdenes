import react from 'react'
import { Button, Form} from 'react-bootstrap';
import LogoImage from './store.png'
var sectionStyle = {
    backgroundImage: `url(${LogoImage})`,
    opacity: 0.9
}
function FormSession(props) {
    return (
        <div>
            <div class=" d-flex flex-row justify-content-center align-items-center">

                <Form className='mt-5 col-4' style={sectionStyle} id='tran'>
                    <br />
                    <Form.Group controlId="formEmail" >
                        <h2>Ingreso Tienda</h2>
                        <Form.Control type="email" placeholder="Correo" />
                        <Form.Text >
                            Ingresa Tu Correo Para Iniciar Sesion/Registrarte
                </Form.Text>
                    </Form.Group>
                    <br />
                    <Form.Group controlId="formBasicPassword">

                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="formBasicPassword">

                        <Button variant="flat" type="submit" className='col-11'>
                            Ingresar
                        </Button>
                    </Form.Group>
                    <br />
                    <Form.Group controlId="formBasicPassword">

                        <Button variant="flat" type="submit" className='col-11'>
                            Registrarse
                        </Button>
                    </Form.Group>

                </Form>
            </div>
        </div>

    )
}



export default FormSession