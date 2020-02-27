import React, { useState } from 'react';
import './Auth.css';

const Auth = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);

    const title = () => {
        return login ? 'Login' : 'Signup';
    }

    const loginToggle = (event) => {
        event.preventDefault();

        setLogin(!login);

        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }

    const displaySignupFields = () => {
        return !login ? (
            <div>
                <label htmlFor='firstName'>First Name:</label>
                <br />
                <input type='text' id='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <br />
                <label htmlFor='lastName'>Last Name:</label>
                <br />
                <input type='text' id='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
        ) : null;
    }

    return (
        <div className=''>
            <form>
                <h1>{ title() }</h1>
                { displaySignupFields() }
                <label htmlFor='email'>Email:</label>
                <br />
                <input type='text' id='email' value={email} onChange={(event)=>setEmail(event.target.value)} />
                <br />
                <label htmlFor='password'>Password:</label>
                <br />
                <input type='password'id='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                <br />
                <button onClick={loginToggle}>Login/Signup Toggle</button>
                <br />
                <button type='submit'>Submit User Data</button>
            </form>
        </div>
    )
}

export default Auth;