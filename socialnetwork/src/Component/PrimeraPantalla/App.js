import React, { Component } from 'react';
import firebase from './ConfiFirebase';
import Muro from '../segundaPantalla/Muro';
import Login from './Login';
import './styles.css'

class App extends Component{

    constructor(){
        super();
        this.state =({
            user: null,
        });
        this.authListener = this.authListener.bind(this);
    }
    componentDidMount(){
        this.authListener();
    }
    authListener(){
        firebase.auth().onAuthStateChanged(user =>{
            //console.log(user);
            if(user){
                this.setState({user});
            }
            else{
                this.setState({user: null});
            }
        });
    }
   render(){
       return(
           <div>
               {this.state.user ? (<Muro/>) : (<Login/>)}
           </div>
       );
   }
}

 export default App;
