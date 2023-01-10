import { useCallback } from 'react'
import PropTypes from 'prop-types'

const Item = ({item, onDeleteToDo, onToggleToDo}) => {
    const handleOnDelete = useCallback(()=>onDeleteToDo(item.id) ,[item.id, onDeleteToDo])
    const handleToggle = useCallback(()=>onToggleToDo(item.id) ,[item.id, onToggleToDo])
    return (
        <div>
            <li>id 
                <strong>{item.id}</strong> 
                task: 
                <strong>{item.name}</strong> 
                status: 
                <strong>{item.status ? 'COMPLETED' : 'PENDING'}</strong>
                <button onClick={handleToggle}>Complete</button>
                <button onClick={handleOnDelete}>Delete</button>
            </li>
        </div>
    )
}

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        status: PropTypes.bool.isRequired
    }),
    onDeleteToDo: PropTypes.func.isRequired,
    onToggleToDo: PropTypes.func.isRequired,
}

export default Item