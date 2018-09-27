import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
//import LoginGoogle from './LoginGoogle';
//import logo from './img/logo.png';
import firebase from './firebase/ConfiFire';


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
  render(){
    return(
      <div className="col-md-6">
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
          </form>
        </div>
    );
  }
}

export default Login;

