import React from 'react';
import AuthContext from '../contexts/AuthContext';

import * as authService from '../services/authentication.js';

class AuthProvider extends React.Component{

    state = {
        isLoggedIn : false
    }

    componentDidMount(){
        this.setState({isLoggedIn:authService.check_login()})
    }

    updateLoggedIn =()=>{
        this.setState({isLoggedIn:authService.check_login()})  
    }


    render(){
        return(
            <AuthContext.Provider 
            value={{isLoggedIn: this.state.isLoggedIn,updateLoggedIn:this.updateLoggedIn}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthProvider;