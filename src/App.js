import React, { useState, useEffect } from 'react';
import { StoryBoxSmall } from './components/Story_box';
import { StoryBoxBig } from './components/Story_box';
import Header from './components/Header';
import Post from './components/Post';
import Story from './components/Story';
import firestore from './firebase';
import LogIn from './components/LogIn';
import SignUp from './components/signUp';
import './App.scss'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export const web_data = React.createContext(null)

const Mat = () => {
  const name = localStorage.getItem("name");
  useEffect(() => {
    if (name === null && window.location.href.search('/account/logIn') === -1 && window.location.href.search('/account/signUp') === -1)
      window.location.href = '/account/logIn'
  }, [])
  const [posts, setPosts] = useState([]);
  const Story_code = () => {
    return (
      <div>
        <Story ID={window.location.href} />
        <a className="btn exit_button" href='/'>
          <i className="material-icons" style={{ fontSize: "30px" }}>close</i>
        </a>
      </div>
    );
  }

  const getPosts = () => {
    firestore.collection('posts').onSnapshot((shot) => {
      const allPost = [];
      shot.forEach((cur) => allPost.push(cur.data()));

      setPosts(allPost);
    }, (error) => console.error(error))
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className='row'>
            <div>
              <Header />
              <div className='main row col l8 offset-l2'>
                <StoryBoxSmall />
                {posts.map((cur, index) => <Post key={index} avatar={cur.pro} name={cur.name} image={cur.img} time={cur.postedTime} />)}
                <StoryBoxBig />
              </div>
            </div>
          </div >
        </Route>
        <Route path="/story/">
          {Story_code()}
        </Route>
        <Route path="/account/logIn">
          <LogIn />
        </Route>
        <Route path="/account/signUp">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default Mat;