import React,{useEffect} from 'react'
import { Button, Form} from 'react-bootstrap';
import { connect } from 'react-redux'
import FormSession from './FormSession';
import StoreView from './StoreView';
///
import Naveg from './Naveg';

function AppContainer(props) {
    return (
        <div>
          <Naveg/>
          {props.vistaForm ? <FormSession/> : <div></div>} 
          {props.logged ? <p>LOGGEADO</p> : <p>SIN LOGGIN</p>}
          <StoreView/>
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
       
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppContainer)

