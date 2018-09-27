import React, {Component} from 'react';
import logo from './img/logo.png'

class Logo extends Component{
    render(){
        return(
            <div className="center-aling">
                <img className="logoceli" src={logo} alt="logoCelibook"/>
            </div>
        )
    }
}

export default Logo;