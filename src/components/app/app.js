import { Component } from 'react';
import { Suspense, lazy } from 'react';

import Spinner from '../spinner/Spinner';

import './app.css'

const AppInfo = lazy(() => import('../app-info/app-info'));
const SearchPanel = lazy(() => import('../search-panel/search-panel'));
const AppFilter = lazy(() => import('../app-filter/app-filter'));
const EmployeesList = lazy(() => import('../employees-list/employees-list'));
const EmployeesAddForm = lazy(() => import('../employees-add-form/employees-add-form'));
//import AppInfo from '../app-info/app-info';
//import SearchPanel from '../search-panel/search-panel';
//import AppFilter from '../app-filter/app-filter';
//import EmployeesList from '../employees-list/employees-list';
//import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'John S.', salary: 2800, promotion: false, like: true,  id: 1},
        {name: 'Alex P.', salary: 2500, promotion: false, like: false,  id: 2},
        {name: 'Andrei S.', salary: 5000, promotion: true, like: false,  id: 3},
      ],
      term: '',
      filter: 'all'
    }
    this.maxId = 4;
    
  }  

  deleteItem = (id) => { 
    this.setState(({data}) => { //нельяз напрямую удалять. иммутабельность надо поддерживать  
      /* 1) способ удалить*/
      return {data: data.filter(item => item.id !== id)} // остаются данные которые не совпдают с id который пришел
      /* 2) cпособо удалить */
      // const index = data.findIndex(elem => elem.id === id);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after];
      // return {data: newArr}
    })}

  addEmployee = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      like: false,
      id: this.maxId++,
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {data:newArr}
    })
  } 

  onTogglePromotion = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id) { return{...item,  promotion: !item.promotion}}
        return item;
      })
    }))
      // 2) способ
    // this.setState(({data}) => {
    //   const index = data.findIndex(elem => elem.id === id);
    //   const old = data[index];
    //   const newItem = {...old, promotion: !old.promotion};
    //   const newArr = [...data.slice(0,index), newItem, ...data.slice(index +1)]
    //   return {data: newArr}
    // })
  }
  onToggleLike = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id) { return{...item,  like: !item.like}}
        return item;
      })
    }))
  }

  searchEmployees = (items, term) => { // выполняет действия по пойску
    if (term.length === 0) { 
      return items;
    }
    return items.filter(item => { return item.name.toLowerCase().indexOf(term) > -1 }) 
  }
  onUpdateSearch = (term) => {this.setState({term})}; // вносить данные в term (как итог работы searchEmployees)

  filterSalary = (items, filter) => { // выполняет действия по фильту на основе кнопок
    switch (filter) {
      case 'like':
        return items.filter(item => item.like);
      case 'moreThen3000':
        return items.filter(item => item.salary > 3000);
      default:
        return items
    }
  }
  onFilterSelect = (filter) => {this.setState({filter})} // вносить данные в filter (как итог работы filterSalary)

  render() {
    const {data, term, filter} = this.state;
    const employees = this.state.data.length;
    const promotioned = this.state.data.filter(item => item.promotion).length;
    const visibleData = this.filterSalary(this.searchEmployees(data, term), filter)//1)() это data после поиска а второй это фильтр. если просто поиск то фильт не сработает

    return (
      <main className="app">
        <Suspense fallback={<Spinner/>}>
          <AppInfo employees={employees} promotioned={promotioned}/>

          <div className="search-panel">
            <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
            <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
          </div>

          <EmployeesList data={visibleData} onDelete={this.deleteItem}
            onTogglePromotion={this.onTogglePromotion} onToggleLike={this.onToggleLike}/>
          <EmployeesAddForm onAddEmployee={this.addEmployee}/>
        </Suspense>
      </main>
    )
  }
}

export default App;