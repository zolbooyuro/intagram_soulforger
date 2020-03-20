import React, { useState, useEffect } from 'react';
import firestore from '../firebase';
import './logIn.scss'

const LogIn = () => {
    const [data, setData] = useState([]);
    const [active, setActive] = useState(true)
    const [error, setError] = useState(false)

    const login = () => {
        var name = document.getElementById('email').value;
        var pass = document.getElementById('password').value;
        var username = '';
        var exist = 'nope';

        data.forEach((cur) => {
            exist = cur.email === name && cur.pass === pass ? 'yep' : exist
            username = cur.email === name && cur.pass === pass ? cur.name : username
        })

        if (exist === 'yep') {
            localStorage.setItem('name', username)
            window.location.href = '/'
        } else 
            setError(true)

    }

    useEffect(() => {
        firestore.collection('emails').onSnapshot((shot) => {
            const all = [];
            shot.forEach((cur) => all.push(cur.data()));

            setData(all);

        }, (error) => console.error(error))
    }, [])

    return (
        <div>
            <div className="logInBox row center">
                <div className="insta_image row center"></div>
                <div class="input input-field col s10 m10 s10 offset-l1 offset-m1 offset-s1" >
                    <input placeholder="Phone number,username, or email" id="email" type="email" class="validate" />
                </div>
                <div class="password input-field col s10 m10 s10 offset-l1 offset-m1 offset-s1">
                    <input placeholder="Password" id="password" type="password" class="validate" />
                </div>
                {
                    active === false ?
                        <a className="btn disabled LogInButton col s10 m10 s10 offset-l1 offset-m1 offset-s1">Log In</a>
                        :
                        <a className="btn LogInButton col s10 m10 s10 offset-l1 offset-m1 offset-s1" onMouseDown={login}>Log In</a>
                }
                {
                    error === true ?
                        <p className="error row col l8 offset-l2 red-text">Sorry, your password was incorrect. Please double-check your password.</p>
                        :
                        <p/>
                }
                <div className="Or">
                    <div className="box col l4 offset-l1"></div>
                    <h6 className="col l2">OR</h6>
                    <div className="box col l4"></div>
                </div>
            </div>
            <div className="bottomBox row center">
                <a className="a">Don't have an account? </a>
                <a href="/account/signUp">Sign up</a>
            </div>
        </div>
    )
}

export default LogIn