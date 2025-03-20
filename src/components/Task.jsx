/*
Este componente muestra una tarea individual y maneja los eventos de clic en la tarea.
Eventos: 
    - agregar con click
    - borrar con click
*/

const Task = ({ task, onDelete, onToggle }) => {
    const handleClick = () => {
        onToggle(task.id);
    };

    return (
        <div className= "tasksContainer">
           
            <span 
                className={`taskDescription ${task.completed ? 'completed' : ''}`} // dos clases distintas en función de si está completa o no para dar estilo
                onClick={handleClick}
            >
                {task.text}
            </span>

            <button className="delTaskBtn"
                onClick={() => onDelete(task.id)}>Eliminar
            </button>   
        </div>
    );
};

export default Task;