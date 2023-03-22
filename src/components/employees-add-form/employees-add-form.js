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

  render() {
    const {name, salary} = this.state;

    return (
      <div className="app-add-form">
          <h3>Add new employee</h3>
          <form
          /* При связывании state в value мы делаем элемент контроллируемым что улучшает производительность */
              className="add-form d-flex">
              <input type="text"
                  className="form-control new-post-label"
                  placeholder="What is his name?" 
                  name='name'
                  value={name}
                  onChange={this.onValueChange}/>
              <input type="number"
                  className="form-control new-post-label"
                  placeholder="Salary in $?"
                  name='salary' 
                  value={salary}
                  onChange={this.onValueChange}/>

              <button type="submit"
                  className="btn btn-outline-light">Add</button>
          </form>
      </div>
    )
  }
}

export default EmployeeAddForm