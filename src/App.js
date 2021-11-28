import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';


import io from 'socket.io-client'

let endPoint = 'http://localhost:5000'
let socket = io.connect(`${endPoint}`)

const App = () => {
  const [messages, setMessages] = useState(['Hello and Welcome'])
  const [room, setRoom] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    getMessages()
  }, [messages.length])

  

  const getMessages = () => {
    socket.on("message", msg => {
      setMessages([...messages, msg]);
    });
  }

  const onChange = e => {
    setMessage(e.target.value)
  }

  const onClick = () => {
    if (message !== '') {
      socket.emit("message", message);
      setMessage('');
    } else {
      alert('Please Add A Message');
    }
  };


  const onClickRoom = () => {
    if (room !== '') {
      socket.emit('join', {
        'user': 'username1',
        'room': room
      })
    } else {
      alert("Please enter room ID")
    }
  }

  return (
    <div>
      {messages.length > 0 &&
        messages.map(msg => (
          <div>
            <p>{msg}</p>
          </div>
        ))}
        <input value={room} name="room" onChange={e => setRoom(e.target.value)}/>
        <button onClick={() => onClickRoom()}>Connect to room</button>
        <input value={message} name="message" onChange={e => onChange(e)} />
        <button onClick={() => onClick()}>Send Message</button>
    </div>
  )
}



export default App;
