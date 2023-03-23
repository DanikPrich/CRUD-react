import { Component } from 'react'
import './search-panel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }

  /* Этот метод берет введенную переменную, и отправляет как в локальный стейт так и родителю данные */
  /* Локальный стейт нужен для создания управляемого компонента */
  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({
      term
    })
    this.props.onUpdateSearch(term)
  }
  
  render() {
    return(
      <input
            type="text"
            className="form-control search-input"
            placeholder="Найти сотрудника"
            value={this.state.term}
            onChange={this.onUpdateSearch}/>
    )
  }
}

export default SearchPanel;