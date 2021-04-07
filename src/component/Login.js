import React, { Component } from 'react';
import '../App.css'

class LoginPage extends Component {
    state = {
        email: '',
        password: ''
    }

    // disabled = () => {
    //     return this.state.email.length > 0 && this.state.password.length > 0;
    // }

    handle = (e) => {
        e.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);
        this.setState({
            email: '',
            password: ''
        });
    }
    render() {
        return (
            <div className="split">
                <div className="split left login">
                  
                    <form onSubmit={this.handle}>
                        <div className="Email">
                            <h1>Login Page</h1>
                            <h3>Welcome Back</h3>
                            {/* <h3>Email :</h3> */}
                            <input
                                id='email'
                                type="email"
                                placeholder="Enter your email"
                                value={this.state.email}
                                onChange={(e) => this.setState({ email: e.target.value })}
                                required
                                autoFocus />
                        </div>
                        <div className="Password">
                            {/* <h3>Password :</h3> */}
                            <input
                                id='password'
                                type="password"
                                placeholder="Enter password"
                                value={this.state.password}
                                onChange={(e) => this.setState({ password: e.target.value })}
                                required
                            />
                        </div>
                        {/* disabled={!this.disabled()} => disabled function using this you can't click the submit button */}
                        <button className="btn">Submit</button>
                        <p>Already have an account <a href="/Signin" className="signin-link-text">Sign in</a></p>
                    </form>

                </div>
                <div className="split right">
                    <div className="blur">
                        <h1>Welcome to Login Page</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;