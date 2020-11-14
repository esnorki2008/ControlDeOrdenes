import React, { useEffect } from 'react'
import { Button, Card, CardColumns } from 'react-bootstrap';
import { connect } from 'react-redux'
import { fetchProduct, buy,selectProductId } from '../redux'
import store from '../redux/store';


function StoreView({ productData, userIdReal, buy, fetchProduct }) {
    useEffect(() => {
        fetchProduct()
    }, [])

    function ShowStore(product) {
        if (userIdReal === null)
            return 2
        if (userIdReal !== product.cod_vendedor_producto)
            return 1
        return 0
    }

    function Buy(product) {
        store.dispatch(selectProductId(product.cod_producto))
        buy()
    }
    return (
        <div>


            <h1 className="bigblue">TIENDA VIRTUAL</h1>

            <div className=" d-flex flex-row justify-content-center align-items-center col-12">

                <CardColumns >
                    {productData.loading ? (
                        <h2>Loading</h2>
                    ) : productData.error ? (
                        <h2>{productData.error}</h2>
                    ) : (
                                <div>

                                    <div>
                                        {productData &&
                                            productData.products &&
                                            productData.products.map(product => <div key={product.cod_producto}>

                                                <Card key={product.cod_producto}>
                                                    <Card.Img variant="top" src="https://dummyimage.com/640x360/fff/aaa" />
                                                    <Card.Body>
                                                        <Card.Title>{product.nombre}</Card.Title>
                                                        <Card.Text>
                                                            {product.descripcion}
                                                        </Card.Text>
                                                        <Card.Text>
                                                            Precio : {product.precio}
                                                        </Card.Text>
                                                    </Card.Body>
                                                    <Card.Footer>
                                                        {ShowStore(product) === 1 ?
                                                            <Button onClick ={()=>{Buy(product)}} type="submit" className='col-11 '>
                                                                Comprar
                                                         </Button>
                                                            : ShowStore(product)===2 ?<p>Ingrese Sesion Para Comprar</p>:<p>No Puede Comprar Sus Propios Articulos</p>
                                                        }
                                                    </Card.Footer>
                                                </Card>
                                            </div>)}
                                    </div>
                                </div>
                            )}
                </CardColumns>
            </div>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        productData: state.product,
        userIdReal: state.session.userRealId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProduct: () => dispatch(fetchProduct()),
        buy: () => dispatch(buy())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StoreView)