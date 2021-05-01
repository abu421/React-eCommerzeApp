import React, { useState } from 'react';
import './sign.scss';
import SignIn from './../../components/signIn/signIn';
import SignUp from './../../components/sign-up/signUp';

const SignInUp = () => {

    

    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
};

export default SignInUp;