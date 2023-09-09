import React, { useEffect, useState } from 'react';
import {FormControl, Input} from '@mui/material';
import './App.css';
import Message from '../Message/Message';
import db from '../../firebase';
import firebase from 'firebase/compat/app';
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';

function App() {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('message')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessage(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      })
  }, [])

  useEffect(() => {
    setUsername(prompt(`Hey! Enter your name..`))
  }, [])

  function sendMessage(event) {
    event.preventDefault();
    db.collection('message').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <img alt ='Messenger_Image' src='https://logos-world.net/wp-content/uploads/2021/02/Facebook-Messenger-Logo-2020-present.jpg' className='app__img'/>
      <h1>Messenger 🚀!</h1>
      <h2>Welcome {username}</h2>

      <form className='app__form'>
        <FormControl className='app__form-control'>
          <Input className='app__input' placeholder="Enter a message..." value={input} onChange={event => { setInput(event.target.value) }} />
          <IconButton className='app__btn' disabled={!input} variant='contained' type='submit' color='primary' size='medium' onClick={sendMessage} >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {
          message.map(({ id, message }) => {
            return <Message
              key={id}
              username={username}
              message={message}
            />
          })
        }
      </FlipMove>
    </div>
  );
}

export default App;
