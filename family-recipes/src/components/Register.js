import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Register = () => {

    const [newUser, setNewUser] = useState({
        username: '',
        password: '',
    })

    const { push } = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://secret-fam-recipes.herokuapp.com/api/register', newUser)
        .then(console.log('Registration Successful', newUser))
        push('/');
    }

    const handleChanges = (input) => {
        setNewUser({...newUser, [input.target.name] : input.target.value})
        console.log('New User:',newUser)
    }

    return (
        <div className='loginBox'>
            <h3>Register</h3>
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
                <label for='newUser' className='newUserLabel'>Already have an account?</label>
                    <Link to='/' className='linkToLogin'>Login</Link>
                <br/>
            </form>
        </div>
    )
}

export default Register