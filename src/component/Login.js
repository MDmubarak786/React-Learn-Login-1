import React, { Component } from 'react';


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
            <div>
                <h1>Login Page</h1>
                <form onSubmit={this.handle}>
                    <div className="Email">
                        <label htmlFor="email">Email :</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                            required
                            autoFocus />
                    </div>
                    <div className="Password">
                        <label htmlFor="password">Password :</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={this.state.password}
                            onChange={(e) => this.setState({ password: e.target.value })}
                            required
                        />
                    </div>
                    {/* disabled={!this.disabled()} => disabled function using this you can't click the submit button */}
                    <button>Submit</button>
                    <p>Already have an account <a href="/Signin">Sign in</a></p>



                </form>
            </div>
        )
    }
}

export default LoginPage;