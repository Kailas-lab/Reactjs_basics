import React from 'react';
import { useParams } from 'react-router-dom';

export default function Profile(props) {
  const { id } = useParams(); // Access the dynamic id from the URL

  return (
    <div>
      <h1>Profile Page</h1>
      <h1>User ID: {id}</h1>
      <h1>Name: {props.name}</h1>

    </div>
  );
}
