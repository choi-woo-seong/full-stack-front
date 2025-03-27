import './App.css';
import React,{useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [currentTime, setCurrnetTime] = useState('');

  useEffect(()=>{
    axios.get('http://15.164.56.190:8080/api/time')
    .then(response => {
      setCurrnetTime(response.data);
    })
    .catch(error => {
      console.log('API 호출중 오류 발생', error);
    })
  })
  return (
    <div className="App">
      <h1>현재시간</h1>
      <h3>{currentTime}</h3>
    </div>
  );
}

export default App;
