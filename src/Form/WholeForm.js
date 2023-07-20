import React from 'react';
import Create from './Create';
import Update from './Update';
import Read from './Read';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List1 from './List1';
import Use from './Use';

export default function WholeForm() {
    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Create />}></Route>
                    <Route path='/create' element={<Create />}></Route>
                    <Route path='/update' element={<Update />}></Route>
                    <Route path='/read' element={<Read />}></Route>
                    <Route path='/list' element={<List1 />}></Route>
                    <Route path='/use' element={<Use />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
