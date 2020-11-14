import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux'
import store from '../redux/store';
import { inputProduct,createProduct } from '../redux'
import CatalogView from './CatalogView';




var sectionStyle = {

    opacity: 0.9
}
function FormProduct(props) {
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
    //
            
    return (
        <div>
            <h3>Reporte De Vendedor</h3>
            
            <h4>Total De Ventas Por Producto</h4>
            {props.r1.map(ob => <div  >{ob.name} : {ob.total}</div>)}
            <h4>Total de Ventas Global(del vendedor actual)</h4>
            <p>{props.r2.total}</p>
            <h4>Promedio de los precios manejados </h4>
            <p>{props.r3.total}</p>
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
        logged: state.session.logged,
        r1: state.sales.r1,
        r2: state.sales.r2,
        r3: state.sales.r3
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

