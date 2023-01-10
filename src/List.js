import Item from './Item.js'
import PropTypes from 'prop-types'

const List = ({items, onDeleteToDo, onToggleToDo}) => {
    return (
        <ul>
            {
                items.map(({id, name, status}) => (
                    <Item key={id} 
                        item={{
                            id: id,
                            name: name,
                            status: status
                        }}
                        onDeleteToDo={onDeleteToDo}
                        onToggleToDo={onToggleToDo}/>
                ))
            }
        </ul>
    )
}

List.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            status: PropTypes.bool.isRequired
        })
    ).isRequired,
    onDeleteToDo: PropTypes.func.isRequired,
    onToggleToDo: PropTypes.func.isRequired,
}

export default List