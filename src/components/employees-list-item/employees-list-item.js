import { Component } from 'react';
import './employees-list-item.css'

class EmployeesListItem extends Component { /* = ({name, salary, promotion}) => */
  constructor(props) {
    super(props);
    this.state = {
      promotion: false,
      like: false,
    }
  }

  onPromotion = () => { this.setState(({promotion}) => ({
      promotion: !promotion
    }))
  }
  onLike = () => {this.setState(({like}) => ({
    like: !like
  }))}

  render() {
    const {name, salary, onDelete} = this.props;
    const {promotion, like} = this.state;
    let classNames = "list-group-item d-flex justify-content-between";
    if (promotion) { classNames += " increase" }
    if (like) { classNames += " like" }

    return (//либо внути <li> {`list-group-item d-flex justify-content-between ${promotion ? 'increase' : ''}`}
      <li className={classNames} >
        <span className="list-group-item-label" onClick={this.onLike}>{name}</span>
        <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
        <div className='d-flex justify-content-center align-items-center'>
          <button type="button"
                  onClick={this.onPromotion}
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
}

export default EmployeesListItem;