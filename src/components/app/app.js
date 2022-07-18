import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'John S.', salary: 2800, promotion: true, id: 1},
        {name: 'Alex P.', salary: 2500, promotion: false, id: 2},
        {name: 'Andrei S.', salary: 5000, promotion: true, id: 3},
      ]
    }
  }

  render() {
    return (
      <div className="app">
      <AppInfo></AppInfo>

      <div className="search-panel">
        <SearchPanel></SearchPanel>
        <AppFilter></AppFilter>
      </div>
      <EmployeesList data={this.state.data} onDelete={id => console.log(id)}></EmployeesList> 
      <EmployeesAddForm></EmployeesAddForm>

      </div>
  )
  }
}

export default App;