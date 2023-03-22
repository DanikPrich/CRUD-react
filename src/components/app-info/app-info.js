import './app-info.css';

const AppInfo = (props) => {
  const {totalEmployeeNumber, totalIncreased} = props
  return (
    <div className="app-info">
      <h1>Employees counting in company N</h1>
      <h2>Total number of employees: {totalEmployeeNumber}</h2>
      <h2>Awards will recieve: {totalIncreased}</h2>
    </div>
  )
}

export default AppInfo;