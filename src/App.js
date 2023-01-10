import List from './List.js'
import AddForm from './AddForm.js'
import './App.css';
import { getToDoList, saveToDoList } from './Service.js'
import { useState, useCallback } from 'react'
import { v4 as uuidV4 } from 'uuid'

function App() {
  const items = [
    { id: uuidV4(), name: 'To do something 1', status: false },
    { id: uuidV4(), name: 'To do something 2', status: false },
    { id: uuidV4(), name: 'To do something 3', status: false },
  ]
  
  const [storageItems, setStorageItems] = useState(getToDoList('item') || items)

  const handleAddToDo = useCallback(item=>{
    console.log("add To do - App")
    const items = [
      {
        id: item.id,
        name: item.name,
        status: item.status
      }, ...storageItems
    ]
    setStorageItems(items)
    saveToDoList('item', items)
  }, [storageItems])

  const handleDeleteToDo = useCallback(id => {
    const newTodoItems = storageItems.filter(item => item.id !== id)
    setStorageItems(newTodoItems)
    saveToDoList('item', newTodoItems)
  }, [storageItems])

  const handleOnToggleStatus = useCallback(id => {
    const item = storageItems.find(item => item.id === id)
    item.status = !item.status
    setStorageItems([...storageItems])
    saveToDoList('item', storageItems)
  }, [storageItems])

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <AddForm onAddToDo={handleAddToDo}/>
      <List items={storageItems} 
        onDeleteToDo={handleDeleteToDo} 
        onToggleToDo={handleOnToggleStatus}/>
    </div>
  );
}

export default App;
