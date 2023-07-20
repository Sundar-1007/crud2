import React, { useEffect, useState } from 'react'
import { API } from './Api'
import axios from 'axios'
import Update from './Update';
import { useNavigate } from 'react-router-dom';


export default function Read() {

  const [formdata, setFormData] = useState([]);


  const get_data = async () => {
    let resp = await axios.get(API);
    setFormData(resp.data);
  };


  let delete1 = async (value) => {
    console.log('delete ==>', value.id);
    await axios.delete(`${API}/${value.id}`)
    get_data();
  } 

  let nav = useNavigate();

  let Update = (value) => {
    localStorage.setItem('name', value.name);
    localStorage.setItem('pass', value.pass);
    localStorage.setItem('gender', value.gender);
    localStorage.setItem('check', value.check);
    localStorage.setItem('id', value.id);
    nav('/update');
  }

  useEffect(() => {
    get_data();
  }, [])
  return (
    <>

      <h1>Read Form</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>User Name</th>
            <th>User Password</th>
            <th>Gender</th>
            <th>Agree Or disagree</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
          {formdata.map((value) => <tr key={value.id}>
            <td>{value.id}</td>
            <td>{value.name}</td>
            <td>{value.pass}</td>
            <td>{value.gender}</td>
            <td>{value.check ? 'true' : 'false'}</td>
            <td><button onClick={() => delete1(value)}>Delete</button></td>
            <td><button onClick={() => Update(value)}>Update</button></td>
          </tr>)}
        </thead>
      </table>
    </>
  )
}