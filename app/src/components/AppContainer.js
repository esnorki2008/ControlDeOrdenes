import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import FormSession from './FormSession';
import StoreView from './StoreView';
import Naveg from './Naveg';
import FormProduct from './FormProduct';

function AppContainer(props) {
     
  
    return (
        <div>
          <Naveg/>
          {props.vistaForm ? <FormSession/> : <div></div>} 
    {props.logged ? <div><p>LOGGEADO {props.userName } </p> {props.crud?<FormProduct/>:<p></p>}</div>: <p>SIN LOGGIN</p>}
          <p></p>
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
  
  
  export default connect(
    mapStateToProps,
    null
  )(AppContainer)

