import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css'

const EmployeesList = ({data, onDelete, onTogglePromotion, onToggleLike}) => {

  const elements = data.map(item => { // не forEach потому что map создает новый массив с изменеными данными!
    const {id, ...itemProps} = item
    return ( // name={item.name} salary={item.salary} вместо {...item} 
      <EmployeesListItem key={id} {...itemProps} 
      onDelete={() => onDelete(id)}
      onTogglePromotion={() => onTogglePromotion(id)}
      onToggleLike={() => onToggleLike(id)}></EmployeesListItem>         
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmployeesList;