import React from 'react';
import { Redirect } from 'react-router';


class Login extends React.Component {
    constructor(props) {
      console.log('props', props)
        super();
        this.state = {
            signInEmail:'', 
            signInPassword:'', 
            redirect: false
        }
    }
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }
    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }
    
    onSubmitSignIn = () => {
        fetch('https://sleepy-tundra-60001.herokuapp.com/signin', {
            method: 'post', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({
                email: this.state.signInEmail, 
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(response => {
          if(response === 'hooraaay') {
            this.setState({ redirect: true })
            console.log(this.state)
            console.log(this.props.state)
          }
        })
       
       
    }

    render() {
      const { redirect } = this.state;
      if (redirect) {
        return <Redirect to='/' />
      }
       
        return (
            <article className ="br3 ba shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email-address"  
                                id="email-address"
                                onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="password" 
                                name="password"  
                                id="password" 
                                onChange={this.onPasswordChange}
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input 
                            onClick ={this.onSubmitSignIn}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit"
                            value="Sign in" />
                        </div>
                        {/* <div className="lh-copy mt3">
                            <p onClick={() => onRouteChange('register')}  className="f6 link dim black db pointer">Register</p>
                        </div> */}
                    </div>
                </main>                                   
            </article>
        );
    }

}

export default Login;