import EmployeesListItem from "../empliyees-list-item/empliyees-list-item"
import './employees-list.css'

/* В компоненте берем данные */
const EmployeesList = ({data}) => {

  /* Перебираем данные и возвращаем новый массив из элементов */
  const elements = data.map(item => {

    const {id, ...itemProps} = item
    return (
      
      /* Так же можем раскрыть данные таким образом, ничего не поменяется */
      <EmployeesListItem key={id} {...itemProps}/>
      // <EmployeesListItem name={item.name} salary={item.salary} increase={item.increase}/>

    )
  })

  return (
    <ul className="app-list list-group">
      {/* Массив из элементов конкатинируется (повторяется) и создает список */}
      {elements}
    </ul>
  )
}

export default EmployeesList