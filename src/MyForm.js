import React from 'react'
 import axios from 'axios';
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
    }
 
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
 
    handleSubmit = (event) => {
        
        event.preventDefault();
 
       axios.post('http://localhost:5000/store-data',this.state).then(
        ()=>{
            alert('data send');
        
        }
       );
 
       
    }
 
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} name="name" onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
 
export default MyForm;