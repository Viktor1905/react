import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {DialogItem} from "./components/Dialogs/DialogItem/DialogItem";
import {Message} from "./components/Dialogs/Message/Message";
import {Post} from "./components/Profile/MyPosts/Post/Post";

let posts = [
    {id: 1, message: 'Hi, my friend', likesCount: 10, liked: false},
    {id: 2, message: 'Hello, how are you?', likesCount: 5, liked: false},
    {id: 3, message: 'Nice ava', likesCount: 8, liked: false},
    {id: 4, message: 'Are you learning React?', likesCount: 12, liked: true },
];
let postsElement = posts.map(post => <Post message = {post.message} likesCount = {post.likesCount} liked = {post.liked} />)
let dialogs = [
    {id: 1, name: 'Viktor'},
    {id: 2, name: 'Ekaterina'},
    {id: 3, name: 'Segrey'},
    {id: 4, name: 'ViktorBig'},
    {id: 5, name: 'Evgeniy'},
    {id: 6, name: 'Aleksandr'},
];
let messages = [
    {message: 'Hi', id: 1},
    {message: 'Hello', id: 2},
    {message: 'Hi,bro', id: 3},
];
let dialogsElement = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
let messagesElement = messages.map(message => <Message message={message.message} id={message.id} />);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App postsElement = {postsElement} dialogsElement = {dialogsElement} messagesElement = {messagesElement}/>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
