import React, { useEffect, useState } from 'react';
import './ViewPatients.css';

function ViewPatients() {

    const [data, setData] = useState([]);

    useEffect(() => {fetch(`${window._env_.API_URL}/patient/getAll`).then((response => response.json())).then((data) => {
        setData(data)
        console.log(data)
      })}, [])

        return (
        <div>
            <br></br>
            <center><h2>Patients List</h2></center>
            <br></br>
            <center>
            <table>
                <thead>
                <tr>
                    <td><center>ID</center></td>
                    <td><center>Name</center></td>
                    <td><center>Email</center></td>
                    </tr>
                </thead>
               
                    <tbody>
                        {
                            data["object"].map(item => {
                                return(
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
            </table>

            </center>
            
        </div>
    ) 
    
}

export default ViewPatients;