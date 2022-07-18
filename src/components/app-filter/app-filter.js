import './app-filter.css';

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button className='btn btn-light' type='button'>All employees</button>
      <button className='btn btn-outline-light' type='button'>Employee for promotion</button>
      <button className='btn btn-outline-light' type='button'>Salary over 3000$</button>
    </div>
  )
}

export default AppFilter;