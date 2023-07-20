import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { API } from './Api';
import { useNavigate } from 'react-router-dom';

export default function Update() {

  const [id, setId] = useState();
  const [name, setName] = useState();
  const [pass, setPass] = useState();
  const [gender, setGender] = useState('null');
  const [check, isCheck] = useState(false);



  useEffect(() => {
    let id = localStorage.getItem('id');
    let name = localStorage.getItem('name');
    let pass = localStorage.getItem('pass');
    let gender = localStorage.getItem('gender');
    let check = localStorage.getItem('check');
    setId(id);
    setName(name);
    setPass(pass);
    setGender(gender);
    isCheck(check == 'false' ? false : true);
    console.log();
  }, []);

  let nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name + pass + gender + check);
    await axios.put(API+'/'+id, {
      name, pass, gender, check
    })
    nav('/read');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Update Form</h1>
        <div>
          <input type='text' required placeholder='User Name' value={name || ''} onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div>
          <input type='password' required placeholder='Password' value={pass || ''} onChange={(e) => setPass(e.target.value)}></input>
        </div>

        <div>
          <input type='radio' id='male' name='gender' checked={gender == 'male'} onChange={() => setGender('male')} required></input>
          <label htmlFor='male'>Male</label>
          <input type='radio' id='female' name='gender' checked={gender == 'female'} onChange={() => setGender('female')} required></input>
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
