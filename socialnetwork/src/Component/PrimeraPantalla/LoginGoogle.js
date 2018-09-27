import React, {Component} from 'react';
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

class LoginGoogle extends Component{
    handleAuth(){
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
         .then(result => console.log(`${result.user.email} ha iniciado seión`))
         .catch(error => console.log(`Error${error.code}: ${error.message}`));
    }
    render(){
        return(
            <div className="botonGoogle">
                    <button  onClick={this.handleAuth}>Login con Google</button>
            </div>
        )
    }
}

export default LoginGoogle;