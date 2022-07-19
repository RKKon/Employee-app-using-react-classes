import './employees-list-item.css'

const EmployeesListItem = (props) => { /* = ({name, salary, promotion}) => */
  
  const {name, salary, onDelete, onTogglePromotion, onToggleLike, promotion, like} = props;
  let classNames = "list-group-item d-flex justify-content-between";
  if (promotion) { classNames += " increase" }
  if (like) { classNames += " like" }

  return (//либо внути <li> {`list-group-item d-flex justify-content-between ${promotion ? 'increase' : ''}`}
    <li className={classNames} >
      <span className="list-group-item-label" onClick={onToggleLike}>{name}</span>
      <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
      <div className='d-flex justify-content-center align-items-center'>
        <button type="button"
                onClick={onTogglePromotion}
                className="btn-cookie btn-sm ">
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button"
                className="btn-trash btn-sm" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>  
  )
}

export default EmployeesListItem;