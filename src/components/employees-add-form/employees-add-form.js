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
                value={name} // необходимо value для тго чтобы был управляемоый элемент и правильного используемого input and form
                onChange={this.onChangeInput} />
            <input type="number"
                className="form-control new-post-label"
                placeholder="salary in $?"
                name="salary"
                value={salary}
                onChange={this.onChangeInput} />
  
            <button type="submit"
                    className="btn btn-outline-light">Add</button>
        </form>
      </div>  
    )
  }
}

export default EmployeesAddForm;
