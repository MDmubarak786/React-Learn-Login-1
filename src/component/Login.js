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
                            <div className="space">
                                <img
                                    className="space-icons"
                                    onClick={() => console.log("Facebook link is woring")}
                                    src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png"
                                    alt="fb"
                                    width="40px"
                                    height="40px" />
                                <img
                                    className="space-icons"
                                    onClick={() => console.log("Google link is woring")}
                                    src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png"
                                    alt="fb"
                                    width="40px"
                                    height="40px" />
                                <img
                                    className="space-icons"
                                    onClick={() => console.log("LinkedIN link is woring")}
                                    src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-256.png"
                                    alt="fb"
                                    width="49px"
                                    height="50px" />

                            </div>
                            <h5 className="or">or</h5>
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