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
            <h1>Patients List</h1>
            <table>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>ID</td>
                    <td>Email</td>
                    </tr>
                </thead>
               
                    <tbody>
                        {
                            this.state.patients.map(
                                patient=>
                                <tr key={patient.id}>
                                    <td>{patient.name}</td>
                                    <td>{patient.id}</td>
                                    <td>{patient.email}</td>
                                </tr>
                            )
                        }
                    </tbody>
            </table>
        </div>
    ) 
    }
}

export default ViewPatients;