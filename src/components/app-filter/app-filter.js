import './app-filter.css'

const AppFilter = () => {
  return (
    <div className="btn-group">
        <button 
            className="btn btn-light"
            type="button">
              All employees
        </button>
        <button 
            className="btn btn-outline-light"
            type="button">
              Employees are being promoted
        </button>
        <button 
            className="btn btn-outline-light"
            type="button">
              Salary more 1000$
        </button>
    </div>
  )
}

export default AppFilter