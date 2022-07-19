import './app-filter.css';

const AppFilter = (props) => {
  const buttonsData = [ // весь этот кусок кода для создания button (вместо верстки к пример у когда 20 )
    {name: 'all', label: 'All employees'},
    {name: 'like', label: 'Employee for promotio'},
    {name: 'moreThen3000', label: 'Salary over 3000$'},
  ];
  const buttons = buttonsData.map(({name,label}) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-light' : 'btn btn-outline-light';
    return (
      <button className={`btn ${clazz}`} key={name} onClick={() => props.onFilterSelect(name)} type='button'>{label}</button>
    )
  })

  return (
    <div className="btn-group">
      {buttons}
      {/* <button className='btn btn-light' type='button'>All employees</button>
      <button className='btn btn-outline-light' type='button'>Employee for promotion</button>
      <button onClick={visibleData} className='btn btn-outline-light' type='button'>Salary over 3000$</button> */}
    </div>
  )
}

export default AppFilter;