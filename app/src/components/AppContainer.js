import React,{useEffect} from 'react'
import { Button, Form} from 'react-bootstrap';
import { connect } from 'react-redux'
import FormSession from './FormSession';
///
import Naveg from './Naveg';

function AppContainer(props) {
    return (
        <div>
          <Naveg/>
          {props.vistaForm ? <FormSession/> : <div></div>} 
           
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

