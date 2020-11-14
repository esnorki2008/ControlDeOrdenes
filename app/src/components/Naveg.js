import React from 'react'
import { Button, Form, Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux'
import { session,crud } from '../redux'
import { form } from '../redux'
import store from '../redux/store';
function Naveg(props) {
    function show(){
        store.dispatch(form(!props.vistaForm))
    }

    return (
        <div>
            
            <div >


                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                    <Form inline>
                        {props.logged ?
                        <Button onClick={props.crud} variant="outline-light">Mi Catalogo</Button>
                        :<p></p>}
                        {!props.logged ?
                            
                            <Button onClick={show } variant="outline-light">Ingresar Al Sistema</Button>  :
                            <Button onClick={props.session}variant="outline-light">Salir Del Sistema</Button>
                        }
                        
                    </Form>
                </Navbar>
            </div>
            
        </div>

    )
}

const mapStateToProps = state => {
    return {
        logged: state.session.logged,
        vistaForm: state.form.vistaForm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        session: () => dispatch(session(false)),
        crud: () => dispatch(crud(false)),
        actForm: () => dispatch(form())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Naveg)
