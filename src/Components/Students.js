import React from 'react'

const Students = () => {
  return (
    <div className='students'>Student Detail
      <table className='tab'>
        <tr className='tr'>
            <th>Name</th>
            <th>Contact</th>
            <th>Age</th>
            <th>Department</th>

        </tr>
        <tr>
            <td>Jyoti</td>
            <td>34568</td>
            <td>23</td>
            <td>CSE</td>
        </tr>
        <tr>
            <td>Jyoti</td>
            <td>4678964</td>
            <td>23</td>
            <td>Civil</td>
        </tr>
        <tr>
            <td>Ashish</td>
            <td>Civil</td>
            <td>34</td>
            <td>Mechanical</td>
        </tr>
        <tr>
            <td>Jeevika</td>
            <td>34556567</td>
            <td>23</td>
            <td>Mechanical</td>
        </tr>
        <tr>
            <td>Jyoti</td>
            <td>3345455676</td>
            <td>23</td>
            <td>Pharmancy</td>
        </tr>
      </table>
    </div>
  )
}

export default Students
