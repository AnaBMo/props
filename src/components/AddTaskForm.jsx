/*
Este componente proporciona un formulario para agregar nuevas tareas a la lista.
*/
import { useState } from 'react';

function AddTaskForm({onAdd}) {

    const [ taskDescription, setTaskDescription ] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskDescription.trim()) return; 
        onAdd(taskDescription);
        setTaskDescription('');
    };

    return(
        <form onSubmit={handleSubmit}>
            <input className='inputTask'
            type="text"
            placeholder="Agrega una tarea"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            />
            <button className= 'addTaskBtn' type="submit">Agregar</button>
        </form>
    )
};

export default AddTaskForm;