import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux'

import { session } from '../redux'
import { form } from '../redux'
import axios from 'axios';

const postLogin = (state) => {
    return function (dispatch)  {
        
        // Return the promise
        var bodyFormData = new FormData();
        bodyFormData.append('usuario', 'usr0');
        bodyFormData.append('password', '1234');
        //console.log(textEmail.current.value)
        
        //state.estado = true

        return axios({
            method: 'post',
            url: 'http://localhost:8000/login/',
            data: bodyFormData,
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(res => {
                dispatch(session(true))
                dispatch(form())
            }).catch(error => {
                dispatch(session(false))
            })
    }
}
var sectionStyle = {

    opacity: 0.9
}
function FormSession(props) {
    /*useEffect(() => {
        postLogin()
      }, [])*/
    let textEmail = React.createRef();
    
    return (
        <div>
            <div class=" d-flex flex-row justify-content-center align-items-center">
            
                <Form className='mt-5 col-4' style={sectionStyle} id='tran'>
                    <br />
                    <Form.Group controlId="formEmail" >
                        <h2>Ingreso Tienda</h2>
                        <Form.Control type="email" placeholder="Correo" ref={textEmail} />
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

                        <Button onClick={props.postLogin} className='col-11'>
                            Ingresar
                        </Button>
                    </Form.Group>
                    <br />
                    <Form.Group controlId="formBasicPassword">

                        <Button className='col-11'>
                            Registrarse
                        </Button>
                    </Form.Group>

                </Form>
            </div>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        logged: state.session.logged
    }
}



export default connect(
    mapStateToProps,
    {postLogin}
)(FormSession)

