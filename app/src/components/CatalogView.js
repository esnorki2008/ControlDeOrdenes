import React, { useEffect } from 'react'
import { Button, Card, CardColumns } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import { connect } from 'react-redux'
import { fetchProduct } from '../redux'
import { deleteProduct } from '../redux'
import { selectProductId } from '../redux'
import store from '../redux/store';
import FormUpdate from './FormUpdate';

function CatalogView({ productData,userIdReal, fetchProduct }) {
    useEffect(() => {
        fetchProduct()
    }, [])
    function productDelete(productId){
        store.dispatch(selectProductId(productId))
        store.dispatch(deleteProduct())
    }

    function productUpdate(product){
        
        store.dispatch(selectProductId(product.cod_producto))
        if (product.show !== true )
            product.show=true
        else
            product.show=false;
    }
    function userRealId(product){
        return userIdReal===product.cod_vendedor_producto
    }
    return (
        <div>


            <h1 className="bigblue">MIS ARTICULOS</h1>

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
                                                {userRealId(product)?
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

                                                        <Button variant="danger" type="submit" onClick ={()=>{productDelete(product.cod_producto)}} className='col-11 '>
                                                            Eliminar
                                                        </Button>
                                                        <p></p>
                                                        <Button variant="warning" type="submit" onClick ={()=>{productUpdate(product)}} className='col-11 '>
                                                            Actualizar
                                                        </Button>
                                                        {product.show? <FormUpdate product={product}/>:<p></p>
                                                        
                                                        }
                                                    </Card.Footer>
                                                </Card>
                                                :<p></p>
                                                }
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
        userId: state.session.userId,
        userIdReal: state.session.userRealId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProduct: () => dispatch(fetchProduct())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CatalogView)