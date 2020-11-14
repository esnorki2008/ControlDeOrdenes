import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux'
import store from '../redux/store';
import { inputProductUpdate,updateProduct } from '../redux'
import CatalogView from './CatalogView';




var sectionStyle = {

    opacity: 0.9
}
function FormUpdate(props) {
    let textName = React.createRef();
    let textDesc = React.createRef();
    let textPric = React.createRef();
   
    function handleClick() {
        let prod = {prodT1:textName.current.value,prodT2:textDesc.current.value,
            prodT3:textPric.current.value}
        store.dispatch(inputProductUpdate(prod))
    }
    function handleButton() {
        handleClick()
        store.dispatch(updateProduct())
    }
    function onChange(e) {
        console.log(2)
   }
    return (
        <div>
            <div className=" d-flex flex-row justify-content-center align-items-center">

                <Form className='mt-5 col-12' style={sectionStyle} id='tran'>
                    <br />
                    <Form.Group controlId="formEmail" >
                        <h2>ACTUALIZAR PRODUCTO</h2>
                        <Form.Control defaultValue={props.product.nombre}  type="text"   placeholder="Nombre Producto" ref={textName} onChange={handleClick} />
                        
                    </Form.Group>
                    
                    <br />
                    <Form.Group controlId="formBasicPassword">
                    <Form.Control defaultValue={props.product.descripcion} type="text"  placeholder="Descripcion Producto" ref={textDesc} onChange={handleClick} />
                    </Form.Group>
                    <br />

                    <Form.Group controlId="formBasicPassword">
                    <Form.Control defaultValue={props.product.precio} type="number"  placeholder="Precio Producto" ref={textPric} onChange={handleClick} />
                    </Form.Group>
                    <br />

                    <Form.Group controlId="formBasicPassword">

                        <Button variant="info" onClick={handleButton} className='col-11'>
                            Confirmar Actualizacion
                        </Button>
                    </Form.Group>
                    <br />
                    <Form.Group controlId="formBasicPassword">

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

const mapDispatchToProps = dispatch => {
    return {
       
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormUpdate)

