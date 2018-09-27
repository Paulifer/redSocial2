import React, { Component } from 'react';
import firebase from './firebase/ConfiFire';
import Muro from './Muro';
import Login from './Login';

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
              return(this.state.user ? (<Muro />) : (<Login />))      
        
        
            }
            else{
                this.setState({user: null});
            }
        });
    }
   
}

 export default App;
