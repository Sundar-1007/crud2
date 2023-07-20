import React, { useState } from 'react';
import '../App.css';
import { API } from './Api';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Create() {

  const [name, setName] = useState();
  const [pass, setPass] = useState();
  const [gender, setGender] = useState('null');
  const [check, isCheck] = useState(false);

  let nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name + pass + gender + check);
    await axios.post(API, {
      name, pass, gender, check
    })
    nav('/read');
  }



  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Create Form</h1>
        <div>
          <input type='text' required placeholder='User Name' value={name || ''} onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div>
          <input type='password' required placeholder='Password' value={pass || ''} onChange={(e) => setPass(e.target.value)}></input>
        </div>

        <div>
          <input type='radio' id='male' name='gender' onChange={() => setGender('male')} required></input>
          <label htmlFor='male'>Male</label>
          <input type='radio' id='female' name='gender' onChange={() => setGender('female')} required></input>
          <label htmlFor='female'>Fe-Male</label>
        </div>

        <div>
          <input type='checkbox' id='check' checked={check} onChange={(e) => isCheck(e.target.checked)}></input>
          <label htmlFor='check'>Are You willing to join Our association</label>
        </div>
        <div>
          <input type='submit'></input>
        </div>
      </form>
    </>
  )
}