import React, {Component} from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import LoginGoogle from './LoginGoogle';
import Logo from './Logo';
import firebase from './ConfiFirebase';


class Login extends Component {
  constructor(props){
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password:''
    };
  }
  handleChange(elem){
    this.setState({ [elem.target.name]: elem.target.value});
  }
  login(elem){
    elem.preventDefault();

    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(res =>{
      console.log(res);
    })
    .catch(error =>{
      console.log(error);
    });
  }
  signup(elem){
    elem.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(res =>{
      console.log(res);
    })
    .catch(error =>{
      console.log(error);
    });
    
  }
   handleAuth(){
     const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(result => console.log(`${result.user.email} ha iniciado seión`))
         .catch(error => console.log(`Error${error.code}: ${error.message}`));
    }
  render(){
    return(
      <div className="col-md-6">
        <div>
           <Logo />
        </div>
        <form>
          <div class="form-group">
            <label for="email">Ingrese su correo</label>
            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Ingrese su correo" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="password" placeholder="Ingrese su contraseña" />
          </div>
          <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
          <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
          <button onClick={this.handleAuth} style={{marginLeft: '25px'}} className="btn btn-danger">google</button>
          </form>
        </div>
    );
  }
}

export default Login;

