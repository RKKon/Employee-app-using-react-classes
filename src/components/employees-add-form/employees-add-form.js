import { Component } from 'react';
//import './employees-add-form.css'
import './employees-add-form.scss';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    }
  }
  
  onChangeInput = (e) => {this.setState({
    [e.target.name]: e.target.value}) } // c [] можно будет получить нужный инпут

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length > 2 && this.state.salary > 0) {
      this.props.onAddEmployee(this.state.name, this.state.salary);
      this.setState({
        name: '',
        salary: ''
      })
      this.validationForm() // clear Form from errors borders
    } else {
      this.validationForm()
    } 
  }

  validationForm = () => {
    const inputs = document.querySelector('.add-form');
    if (this.state.name.length > 2 && this.state.salary > 0) { // clear Form
      inputs[0].style.border = '';
      inputs[1].style.border = '';
    } else if (this.state.name.length < 2 && this.state.salary <= 0) { 
      inputs[0].style.border = '3.1px solid #e03737c7';
      inputs[1].style.border = '3.1px solid #e03737c7';
    } else if (this.state.name.length < 2) {
      inputs[0].style.border = '3.1px solid #e03737c7';
      inputs[1].style.border = '';
    } else if (this.state.salary <= 0) {
      inputs[1].style.border = '3.1px solid #e03737c7';
      inputs[0].style.border = '';
    }
  }

    
  render() {
    const {name, salary} = this.state;
    return (
      <div className="app-add-form">
        <h3>Add a new employee</h3>
        <form
            className="add-form d-flex" 
            onSubmit = {this.onSubmit}>
            <input type="text"
                className="form-control new-post-label"
                placeholder="What's his name?"
                name="name"
                value={name} // необходимо value для того чтобы был управляемоый элемент и правильного используемого input and form
                onChange={this.onChangeInput} />
            <input type="number"
                className="form-control new-post-label"
                placeholder="salary in $?"
                name="salary"
                value={salary}
                onChange={this.onChangeInput} />
  
            <button type="submit" className="btn btn-outline-light">Add</button>
        </form>
      </div>  
    )
  }
}

export default EmployeesAddForm;
