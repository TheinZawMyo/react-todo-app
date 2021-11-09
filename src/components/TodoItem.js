import React from 'react'
import './TodoItem.css'

function TodoItem({id, name, changeUpdate, handleDelete}) {
    
    return (
        <div>
            <div className="list_item"><input type="text" onChange={e => changeUpdate(e.target.value, id)} className="editInput" value={name}/>
                <span className="delete" onClick={() => handleDelete(id)}>✕</span>
                {/* <span className="update" onClick={handleUpdate}>✔️</span> */}
            </div>
        </div>
    )
}

export default TodoItem
