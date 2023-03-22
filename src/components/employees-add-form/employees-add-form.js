import { Component } from 'react'
import './employees-add-form.css'

class EmployeeAddForm extends Component{
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      salary: '',
    }
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    
    if(this.state.name.length < 3 || !this.state.salary) return
    
    this.props.addItem(this.state)
    this.setState({
      name: '',
      salary: ''
    })
    
  }

  render() {
    // const {addItem} = this.props
    const {name, salary} = this.state;

    return (
      <div className="app-add-form">
          <h3>Add new employee</h3>
          <form
              className="add-form d-flex"
              onSubmit={this.onSubmit}>
              <input type="text"
                  className="form-control new-post-label"
                  placeholder="What is his name?" 
                  name='name'
                  /* При связывании state в value мы делаем элемент контроллируемым что улучшает производительность */
                  value={name}
                  onChange={this.onValueChange}/>
              <input type="number"
                  className="form-control new-post-label"
                  placeholder="Salary in $?"
                  name='salary' 
                  /* При связывании state в value мы делаем элемент контроллируемым что улучшает производительность */
                  value={salary}
                  onChange={this.onValueChange}/>

              <button type="submit"
                  className="btn btn-outline-light"
                  
              >Add</button>
          </form>
      </div>
    )
  }
}

export default EmployeeAddForm