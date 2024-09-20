import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Settings from './Settings';
import Profile from './Profile';

export default function User() {
  return (
    <div>
      <Routes>
        {/* Uncomment this line if you want to use it: */}
        {/* <Route path="profile/:id" element={<Profile />} /> */}
        
        {/* Correct usage of props with Route */}
        <Route path="profile/:id" element={<Profile name='kailas' />} /> 
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}
