import { Component } from 'react';
import './employees-list-item.css'

class EmployeesListItem extends Component {

    render() {
        /* Достаем деструктуризацией пропсы и стейты */
        // const {salary} = this.state
        const {name, onDelete, onToggleProp, salary, increase, rise, onSalaryChange} = this.props;
        // const {increase, rise} = this.state;

        /* Если в стейте переменные значит изменить стили */
        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) classNames += ' increase';
        if (rise) classNames += ' like';
        
        return (
        <li className={classNames}>
            {/* Записываем значение data-toggle чтобы знать на что нажал пользователь */}
            <span 
                onClick={onToggleProp} 
                className="list-group-item-label" 
                data-toggle="rise"
                style={{fontSize: '40px'}}
            >
                {name}
            </span>
            <input 
                type="number" 
                className="list-group-item-input" 
                value={salary} 
                onChange={(e) => onSalaryChange(e.target.value)}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp}
                    data-toggle="increase">
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
    }
}



export default EmployeesListItem