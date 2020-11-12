import react from 'react'
import { Button, Form,Col,Card,CardGroup, CardColumns } from 'react-bootstrap';

import styles from './CSS/StoreView.css'

function StoreView(props) {
    return (
        <div>
           

            <h1 class="bigblue">TIENDA VIRTUAL</h1>

            <div class=" d-flex flex-row justify-content-center align-items-center col-12">
                
                <CardColumns >
                {[0, 1, 2, 3, 4,5,6,7,8,9,10,11,12,13].map(i => (
             
           
                    <Card>
                        <Card.Img variant="top" src="https://dummyimage.com/640x360/fff/aaa" />
                        <Card.Body>
                            <Card.Title>Zapatos</Card.Title>
                            <Card.Text>
                                AZULES
                            </Card.Text>
                            <Card.Text>
                                Precio : Q{20}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            
                            <Button class="flat" type="submit" className='col-11 '>
                                Agregar Al Carro
                            </Button>
                        </Card.Footer>
                    </Card>
                     ))}
                </CardColumns>
            </div>
        </div>
        
    )
}



export default StoreView