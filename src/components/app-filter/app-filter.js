
import './app-filter.css'

const AppFilter = (props) => {

  const buttonsData = [
    {name: 'all', label: 'All employees'},
    {name: 'rise', label: 'Employees are being promoted'},
    {name: 'more', label: 'Salary more 1000$'},
  ];

  const buttons = buttonsData.map(({name, label}) => {
    const clazz = name === props.filter ? "btn-light" : "btn-outline-light"
    return (
      <button 
        className={`btn ${clazz}`}
        type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}>
          {label}
      </button>
    )
  })

  return (
    <div className="btn-group">
      {buttons}
    </div>
  )
}

export default AppFilter