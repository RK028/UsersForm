import React from 'react';
import { useLocation ,useNavigate} from "react-router-dom";
import { useState } from 'react';
import '../Styles/form.css';

function Home() {
    const location =useLocation()
    const model = useState('')
  return (
    <div>
        <form action='GET'>
          <table className='table'>
            <thead className='thead-dark'>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>DATE</th>
                <th>Email</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{location.key.at} </td>
                <td>{location.state.name}</td>
                <td>Date</td>
                <td>{location.state.id}</td>
                <td>Active</td>
              </tr>
            </tbody>
          </table>

        </form>
    </div>
  );
}

export default Home;
