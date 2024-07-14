import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [passwordList, setPasswordList] = useState([]);
  useEffect(() => {
    Axios.request({
      method: 'get',
      baseURL: 'http://localhost:3001/',
      url: 'getpassword',
    })
      .then((res) => {
        setPasswordList(res.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the password data!', error);
      });
  }, []);

  const handleSubmit = () => {
    console.log(password, title);
    Axios.post('http://localhost:3001/register', {
      password: password,
      title: title
    });
  };

  const decryption = (encrypted) => {
    Axios.post('http://localhost:3001/decryptpassword', {password: encrypted.password, iv: encrypted.iv})
     .then((res) => {
      console.log(res.data)
     });
  };

  return (
    <div className="App">
      <div className="AddPassword">
        <input type="text" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
        <input type="text" placeholder='Website' onChange={(e) => setTitle(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className='Passwords'>
        {passwordList.map((val) => {
          return (
        <div className='password' onClick={() => {decryption({password: val.password, iv: val.iv})}}>
          <h3 key={val.id}>{val.title}</h3>
        </div>
        )
        })}
      </div>
    </div>
  );
}

export default App;
