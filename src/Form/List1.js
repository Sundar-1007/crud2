import axios from "axios";
import React, { useEffect, useState } from "react";

export default function List1() {

    const [save,setSave] =  useState('/posts');
    const [item,setItem] =  useState([]);
    const [item2,setItem2] =  useState([]);


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com'+ save)
        .then(response => response.json())
        .then(json => setItem(json));

        const getData = async () => {
        let get =  await axios.get('https://jsonplaceholder.typicode.com'+save);
        setItem2(get.data);
        console.log(item2);
        }
        
        getData();
   
    },[save])
    

    
    return (
        <>
            <button onClick={()=> setSave('/posts')}>posts</button>
            <button onClick={()=> setSave('/users')}>users</button>
            <button onClick={()=> setSave('/photos')}>photos</button>
            
            {
                item2.map((element) => <pre>
                    {JSON.stringify(element)}
                </pre>
                    )
            }
        </>
    )
}