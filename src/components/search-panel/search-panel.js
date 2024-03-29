import { Component } from 'react';
import './search-panel.css'

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onUpdateSearch = (e) => { // it Local function
    const term = e.target.value.toLowerCase();
    this.setState({term})
    this.props.onUpdateSearch(term) // it comes from App
  }

  render() {
    return (
      <input type="text" 
      className='form-control search-input' 
      placeholder='Find an employee' 
      value={this.state.term}
      onChange={this.onUpdateSearch}/>
    )
  }
}

export default SearchPanel;