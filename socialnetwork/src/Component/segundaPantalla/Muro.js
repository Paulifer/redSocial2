import React, { Component } from 'react';
import firebase from '../PrimeraPantalla/ConfiFirebase'

class Muro extends Component{
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout(){
        firebase.auth().signOut();
    }
    render(){
        return(
            <div>
                <h1>Welcome</h1>
                <button onClick={this.logout}>cerrar sesión</button>
            </div>
        );
    }
}

export default Muro;