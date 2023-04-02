import React from 'react';
import ServiceFetch from '../../../service/ServiceFetch';
import './ViewPatients.css';

class ViewPatients extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            patients:[]
        }
    }
    
    componentDidMount(){
        ServiceFetch.getPatients().then((res) => {
            this.setState({patients:res.object});
        });
    }

    render(){ 
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
                            this.state.patients.map(
                                patient=>
                                <tr key={patient.id}>
                                    <td><center>{patient.id}</center></td>
                                    <td><center>{patient.name}</center></td>
                                    <td><center>{patient.email}</center></td>
                                </tr>
                            )
                        }
                    </tbody>
            </table>

            </center>
            
        </div>
    ) 
    }
}

export default ViewPatients;