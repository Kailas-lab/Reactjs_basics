import React, { Component } from 'react'
import Functionn from './Functionn';

class Classs extends Component{
    render(){
        return (
            <>
            <table>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
          </table>
           
           <Functionn/>
          </>
        )
    }
}

export default Classs;