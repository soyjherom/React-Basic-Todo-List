import { useState } from 'react'
import PropTypes from 'prop-types';
import { v4 as uuidV4 } from 'uuid'

const AddForm = ({onAddToDo}) => {
    
    const [inputValue, setInputValue] = useState('')
    
    const handleChange = e => {
        setInputValue(e.target.value)
    }

    const addToDoItem = e => {
        e.preventDefault()
        const item = {
            id: uuidV4(),
            name: inputValue,
            status: false
        }
        onAddToDo(item)
        setInputValue('')
    }
    
    return(
        <div>
            <form onSubmit={addToDoItem}>
                <input 
                    onChange={handleChange}
                    value={inputValue}
                    placeholder="Add Task"/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

AddForm.propTypes = {
    onAddToDo: PropTypes.func.isRequired,
}

export default AddForm