import React, { useState, useEffect } from 'react';
import firestore from '../firebase';
import './signUp.scss';

const SignUp = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(true)

    const signUp = () => {
        var email = document.getElementById('email').value;
        var pass = document.getElementById('password').value;
        var username = document.getElementById('Username').value;;
        var exist = 'nope';

        data.forEach((cur) => {
            exist = cur.email === email ? 'yep' : exist
        })

        if (exist === 'nope') {
            var num = {
                email: email,
                pass: pass,
                name: username
            };
            firestore.collection('emails').doc('' + data.length).set(num);
            document.getElementById('signUpBox').style.borderColor = "green"
        } else
            document.getElementById('signUpBox').style.borderColor = "red"
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
            <div id="signUpBox" className="signUpBox row center">
                <div className="insta_image row center"></div>
                <p className="row col l8 offset-l2">Sign up to see photos and videos from your friends.</p>
                <div className="Or">
                    <div className="box col l4 offset-l1"></div>
                    <h6 className="col l2">OR</h6>
                    <div className="box col l4"></div>
                </div>
                <div className="email_signUp input-field col s10 m10 s10 offset-l1 offset-m1 offset-s1">
                    <input placeholder="Mobile number, or email" id="email" type="email" className="validate" />
                </div>
                <div className="name_signUp input-field col s10 m10 s10 offset-l1 offset-m1 offset-s1">
                    <input placeholder="Full Name" id="FullName" type="text" className="validate" />
                </div>
                <div className="user_signUp input-field col s10 m10 s10 offset-l1 offset-m1 offset-s1">
                    <input placeholder="Username" id="Username" type="text" className="validate" />
                </div>
                <div className="password input-field col s10 m10 s10 offset-l1 offset-m1 offset-s1">
                    <input placeholder="Password" id="password" type="password" className="validate" />
                </div>
                <a className="btn LogInButton col s10 m10 s10 offset-l1 offset-m1 offset-s1" onClick={signUp}>Sign up</a>
                <p className="p row col l8 offset-l2">By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
            </div>
            <div className="bottomBox row center">
                <a className="a">Have an account? </a>
                <a href="/account/logIn">Log in</a>
            </div>
        </div>
    )
}

export default SignUp;