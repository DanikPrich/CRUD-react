import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeeAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
  /* В главный компонент входят данные, мы эти данные отдаем в компонент */
  const data = [
    {name: 'Daniel G.', salary: 3000, increase: true},
    {name: 'Michail S.', salary: 1000, increase: false},
    {name: 'Alex M.', salary: 5000, increase: false},
  ];

  return (
    <div className="app">
      <AppInfo/>

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>
      <EmployeesList data={data}/>
      <EmployeeAddForm/>
    </div>
  )
}

export default App;