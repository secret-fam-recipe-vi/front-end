import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'

import {UserContext} from '../context/UserContext'

const Login = () => {

    const {user, setUser} = useContext(UserContext)

    const { push } = useHistory()

    const handleChanges = (input) => {
        setUser({...user, [input.target.name] : input.target.value})
        console.log('User:',user)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('new', user)
        axiosWithAuth()
          .post(`https://secret-fam-recipes.herokuapp.com/api/login`, user)
          .then(res => {
            console.log('response:', res.data.token)
            console.log('Submitted Credentials', user)
            localStorage.setItem('token', res.data.token);
            push('/dashboard');
          })
          .catch(err => console.log({ err }));
      };

    return (
        <div className='loginBox'>
            <h3>Login</h3>
            <form className='loginForm' onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    name='username'
                    placeholder='username'
                    onChange={handleChanges}
                    required
                />
                <br/>
                <input 
                    type='password'
                    name='password'
                    placeholder='password'
                    onChange={handleChanges}
                    required
                />
                <br/>
                <input type='submit' className='submit'/>
                <br/>
                <label for='newUser' className='newUserLabel'>New user?</label>
                <Link to='/register' className='linkToRegister'>Register</Link>
                <br/>
            </form>
        </div>
    )
}

export default Login