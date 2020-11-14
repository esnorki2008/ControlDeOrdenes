import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux'
import store from '../redux/store';
import { inputProduct,createProduct } from '../redux'
import CatalogView from './CatalogView';




var sectionStyle = {

    opacity: 0.9
}
function FormProduct() {
    let textName = React.createRef();
    let textDesc = React.createRef();
    let textPric = React.createRef();
    function handleClick() {
        let prod = {prodT1:textName.current.value,prodT2:textDesc.current.value,
            prodT3:textPric.current.value}
        store.dispatch(inputProduct(prod))
    }
    function handleButton() {
        handleClick()
        store.dispatch(createProduct())
    }
    return (
        <div>
            <div className=" d-flex flex-row justify-content-center align-items-center">

                <Form className='mt-5 col-4' style={sectionStyle} id='tran'>
                    <br />
                    <Form.Group controlId="formEmail" >
                        <h2>CRUD Productos</h2>
                        <Form.Control type="text" placeholder="Nombre Producto" ref={textName} onChange={handleClick} />
                        
                    </Form.Group>
                    
                    <br />
                    <Form.Group controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Descripcion Producto" ref={textDesc} onChange={handleClick} />
                    </Form.Group>
                    <br />

                    <Form.Group controlId="formBasicPassword">
                    <Form.Control type="number" placeholder="Precio Producto" ref={textPric} onChange={handleClick} />
                    </Form.Group>
                    <br />

                    <Form.Group controlId="formBasicPassword">

                        <Button onClick={handleButton} className='col-11'>
                            Crear
                        </Button>
                    </Form.Group>
                    <br />
                    <Form.Group controlId="formBasicPassword">

                    </Form.Group>

                </Form>
            </div>
            <CatalogView/>
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
        createProduct: () => dispatch(createProduct())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormProduct)

