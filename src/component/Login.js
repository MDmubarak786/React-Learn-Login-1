import React, { Component } from 'react'

class LoginPage extends Component {
    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <form>
                    <div>  
                        <label htmlFor="email">Email :</label>
                        <input type="text" placeholder="Enter your email" required />
                    </div>
                   <div>
                        <label htmlFor="password">Password :</label>
                        <input type="password" placeholder="Enter your password" required />
                   </div>
                    <button>Submit</button>
                    <p>Already have an account </p>



                </form>
            </div>
        )
    }
}

export default LoginPage;