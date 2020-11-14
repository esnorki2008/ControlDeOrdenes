import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux'
import store from '../redux/store';
import { session } from '../redux'
import { form } from '../redux'
import axios from 'axios';

const postLogin = (state) => {
    return function (dispatch) {


        const state = store.getState();

        var bodyFormData = new FormData();
        bodyFormData.append('usuario', state.form.t1Form);
        bodyFormData.append('password', state.form.t2Form);


        return axios({
            method: 'post',
            url: 'http://localhost:8000/login/',
            data: bodyFormData,
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(res => {
                dispatch(session(true,res.data.userId,res.data.userIdReal,res.data.name))
                dispatch(form())
            }).catch(error => {
                dispatch(session(false))
            })
    }
}

const postUser = (state) => {
    return function (dispatch) {
        const state = store.getState();

        var bodyFormData = new FormData();
        bodyFormData.append('usuario', state.form.t1Form);
        bodyFormData.append('password', state.form.t2Form);
        axios({
            method: 'post',
            url: 'http://localhost:8000/user/',
            data: bodyFormData,
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            }).catch(error => {
                console.log(error)
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
    let textPass = React.createRef();
    function handleClick() {
        store.dispatch(form(true, textEmail.current.value, textPass.current.value))

    }
    return (
        <div>
            <div className=" d-flex flex-row justify-content-center align-items-center">

                <Form className='mt-5 col-4' style={sectionStyle} id='tran'>
                    <br />
                    <Form.Group controlId="formEmail" >
                        <h2>Ingreso Tienda</h2>
                        <Form.Control type="email" placeholder="Correo" ref={textEmail} onChange={handleClick} />
                        <Form.Text >
                            Ingresa Tu Correo Para Iniciar Sesion/Registrarte
                </Form.Text>
                    </Form.Group>
                    <br />
                    <Form.Group controlId="formBasicPassword">

                        <Form.Control type="password" placeholder="Password" ref={textPass} onChange={handleClick} />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="formBasicPassword">

                        <Button onClick={props.postLogin} className='col-11'>
                            Ingresar
                        </Button>
                    </Form.Group>
                    <br />
                    <Form.Group controlId="formBasicPassword">

                        <Button onClick={props.postUser} className='col-11'>
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
    { postLogin, postUser }
)(FormSession)

