export const getToDoList = (key) => {
    const storage = localStorage.getItem(key)
    let items = null
    try{
        const storageJSON = JSON.parse(storage)
        if(Array.isArray(storageJSON)){
            items = storageJSON
        }
    }catch(e){
        console.err(e.message)
        items = []
    }
    return items
}

export const saveToDoList = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}