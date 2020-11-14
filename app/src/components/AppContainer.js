import React,{useEffect} from 'react'
import { Button, Form} from 'react-bootstrap';
import { connect } from 'react-redux'
import FormSession from './FormSession';
import StoreView from './StoreView';
///
import Naveg from './Naveg';
import FormProduct from './FormProduct';

function AppContainer(props) {
    return (
        <div>
          <Naveg/>
          {props.vistaForm ? <FormSession/> : <div></div>} 
    {props.logged ? <div><p>LOGGEADO {props.userName } </p> {props.crud?<FormProduct/>:<p></p>}</div>: <p>SIN LOGGIN</p>}
          
          <StoreView/>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        logged: state.session.logged,
        crud: state.session.crud,
        vistaForm: state.form.vistaForm,
        userName:state.session.userName
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
       
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppContainer)

