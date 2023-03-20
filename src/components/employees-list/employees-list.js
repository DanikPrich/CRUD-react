import EmployeesListItem from "../empliyees-list-item/empliyees-list-item"
import './employees-list.css'
const EmployeesLit = () => {
  return (
    <ul className="app-list list-group">
      <EmployeesListItem/>
      <EmployeesListItem/>
      <EmployeesListItem/>
      
    </ul>
  )
}

export default EmployeesLit