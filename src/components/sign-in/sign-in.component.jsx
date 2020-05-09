import React from 'react';

import FormInput from '../../components/form-imput/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';


import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            email: '',
            password:''
        }
    }

handleSubmit = event => {
    event.preventDefault();
    this.setState({email: '', password: ''})
}

handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value})
}

render() {
    return (
        <div className='sign-in'>
            <h1>I already have an account</h1>
            <span>Sign in with your e-mail and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput name="email" label="email" type="email" value={this.state.email} handleChange={this.handleChange} required />
            
                <FormInput name="password" label="password" type="password" value={this.state.password} handleChange={this.handleChange} required />
               <div className='buttons'> 
               <CustomButton type="submit" value='Submit Form'>
                    Sign In
                </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                   {'  '} Sign in with Google {' '}
                </CustomButton>
                </div>
               
            </form>
        </div>
    )
}

}

export default SignIn;
