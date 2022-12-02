import React from 'react';
import {Routes, Route} from "react-router-dom";
import Error from '../../utils/Error';
import ALayout from './ALayout';
import Dashboard from './Dashboard';
import { User, Edit, Add} from './user'





const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<ALayout/>}>
                <Route index element={<Dashboard/>}/>
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="user">
                    <Route path="index" element={<User/>}/>
                    <Route path="edit/:uid" element={<Edit/>}/>
                    <Route path="add" element={<Add/>}/>
                </Route>
                <Route path="/*" element={<Error/>}/> 
            </Route>    
        </Routes>
    );
};

export default AdminRouter;