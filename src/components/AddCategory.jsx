import React, { useState } from 'react';
import PropType from 'prop-types';
import '../App.css';

const AddCategory = (props) => {

    const [inputValue, setInputValue] = useState('');

    const handlerInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 0) {
            props.setCategorias((cats) => [...cats, inputValue]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handlerSubmit}>
            <input
                className="Input-search"
                type="text"
                placeholder="Busca aquí tu gif en react app..."
                onChange={handlerInputChange}
                value={inputValue}/>
        </form>
    );
}

AddCategory.propType = {
    setCategorias: PropType.func.isRequired
};
 
export default AddCategory;