// import { Component } from 'react';
import './employees-list-item.css'

const EmployeesListItem = (props) => {
  /* Если в конструкторе только пропсы можно его не писать */
  // constructor(props) {
  //   super(props);

  //   /* Стейт при изменении перерендывает компонент */
  //   this.state = {
  //     increase: false,
  //     rise: false,
  //   };
  // }

  // /* Добавляем печеньку */
  // onIncrease = () => {
  //   this.setState(({increase}) => ({
  //     increase: !increase
  //   }))
  // }

  // /* Добавляем повышение */
  // onRise = () => {
  //   this.setState(({rise}) => ({
  //     rise: !rise
  //   }))
  // }

  // render() {
    /* Достаем деструктуризацией пропсы и стейты */
  const {name, salary, onDelete, onToggleIncrease, onToggleRise, increase, rise} = props;
  // const {increase, rise} = this.state;

  /* Если в стейте переменные значит изменить стили */
  let classNames = "list-group-item d-flex justify-content-between";
  if (increase) classNames += ' increase';
  if (rise) classNames += ' like';
  
  return (
    <li className={classNames}>
        <span onClick={onToggleRise} className="list-group-item-label">{name}</span>
        <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
        <div className='d-flex justify-content-center align-items-center'>
            <button type="button"
                className="btn-cookie btn-sm "
                onClick={onToggleIncrease}>
                <i className="fas fa-cookie"></i>
            </button>
  
            <button type="button"
                    className="btn-trash btn-sm "
                    onClick={onDelete}>
                <i className="fas fa-trash"></i>
            </button>
            <i className="fas fa-star"></i>
        </div>
    </li>
  )
  // }
}



export default EmployeesListItem