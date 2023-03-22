import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeeAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    /* В главный компонент входят данные, мы эти данные отдаем в компонент */
    this.state = {
      data: [
        {name: 'Daniel G.', salary: 3000, increase: true, id: 1},
        {name: 'Michail S.', salary: 1000, increase: false, id: 2},
        {name: 'Alex M.', salary: 5000, increase: false, id: 3},
      ]
    }

    this.maxId = 4
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
          // Создаем копию массива без нужного элемента 1 способ
        // Находим индекс элемента массива из айдишника
      // const index = data.findIndex(elem => elem.id === id);
        // Создаем копию элемента до нужного
      // const before = data.slice(0, index);
        // И после нужного и до конца массива
      // const after = data.slice(index + 1)
      // const newArr = [...before, ...after];

      return {
        // 2 способ
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = ({name, salary}) => {
    
    
    // console.log([...this.state.data, {name: name, salary: salary, increase: false, id: this.maxId}])
    // console.log(name)

    const newItem = {name: name, salary: salary, increase: false, id: this.maxId++};

    this.setState(({data}) => {
      return {
        data: [...data, newItem],
      }
    });
  }

  render() {
    const {data} = this.state
  
    return (
      <div className="app">
        <AppInfo/>
  
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
        <EmployeesList 
          data={data}
          onDelete={(id) => this.deleteItem(id)}
        />
        <EmployeeAddForm 
          addItem={(name, salary) => this.addItem(name, salary)}
        />
      </div>
    )
  }
}

export default App;