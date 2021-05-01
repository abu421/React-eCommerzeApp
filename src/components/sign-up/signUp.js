import React, { useState } from 'react';
import './signUp.scss';
import FormInput from '../form-Input/form-input';
import CustomButton from '../button/button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';

const SignUp = () => {

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    // const [ObjUser, setObjUser] = useState(
    //     {
    //         displayName: '',
    //         email: '',
    //         password: '',
    //         confirmPass: ''
    //     }
    // );

    const handleSubmit = async (event) => {
        event.preventDefault();

        // const { displayName, email, password, confirmPass } = {...ObjUser};

        // const obj = {name: 'abu'};
        // let {name, email} = { ...obj }

        if(password !== confirmPass)
        {
            alert('passwords dont match');
            return;
        }
        
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            // console.log(user);
            // console.log(displayName);
            setDisplayName('');
            setEmail('');
            setPassword('');
            setConfirmPass('');
            // setObjUser({
            //     displayName: '',
            //     email: '',
            //     password: '',
            //     confirmPass: ''
            // });

        } catch(error){
            console.error(error);
        }
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        if(name === 'displayName'){
            setDisplayName(value);
        }
        if(name === 'email'){
            setEmail(value);
        }
        if(name === 'password'){
            setPassword(value);
        }
        if(name === 'confirmPass'){
            setConfirmPass(value);
        }

        // const {name, value} = event.target;
        // setObjUser ({[name]: value});
    };

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput type='text' name='displayName' value={displayName} onChange={handleChange} label='Display Name' required />
                <FormInput type='email' name='email' value={email} onChange={handleChange} label='Email' required />
                <FormInput type='password' name='password' value={password} onChange={handleChange} label='Password' required />
                <FormInput type='password' name='confirmPass' value={confirmPass} onChange={handleChange} label='Confirm Password' required />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
};

export default SignUp;