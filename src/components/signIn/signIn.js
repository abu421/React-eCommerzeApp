import React, { useState } from 'react';
import './signIn.scss';
import FormInput from '../form-Input/form-input';
import CustomButton from '../button/button';
import { auth, signInWithGoogle } from '../../firebase/firebase.util';

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(event);
        try{
        await auth.signInWithEmailAndPassword(email, password);
        setEmail("");
        setPassword("");
        }catch(error)
        {
            console.log(error);
        }

        
    }

    const handleChange = (event) => 
    {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(`${name} ${value}`)
        if(name ==='email'){
            setEmail(value);
        }
        if(name === 'password'){
            setPassword(value);
        }
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name="email" type="email" value={email} handleChange={handleChange} label="email" required />
                <FormInput name="password" type="password" value={password} handleChange={handleChange} label="password" required />
                <div className='buttons'>
                    <CustomButton type="submit"> Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
                </div>
            </form>

        </div>
    );
};

export default SignIn;