/*
Este es el componente principal de la aplicación donde se maneja el estado de las tareas 
y se definen las funciones para agregar, eliminar y marcar tareas como completadas. 
*/

import './App.css';
import { useState } from 'react';
import Task from './components/Task'
import AddTaskForm from './components/AddTaskForm';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  // función que crea tarea con los siguientes datos: 
    // id -> contador de elementos en array para asignar id
    // tarea -> valor introducido en el input
    // tarea completada -> por defecto en false
  const addTask = (text) => {
    const newTask = {
      id: tasks.length + 1,
      text, 
      completed: false
    };
    setTasks([...tasks, newTask]); // añadir la nueva tarea al array manteniendo anteriores
  };

  // función para eliminar tareas:
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId)); // filtro dejando las que no coinciden con el id de la tarea a borrar
  };


  const toggleTask  = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task 
    )); // ternario para pasar el complete de false a true, y cuando esté en true la tarea saldrá tachada. 
  };


  return (
    <>
      <h1>Lista de tareas</h1>
      <AddTaskForm onAdd={addTask} />
      <div>
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onDelete={deleteTask} /* Esta función se activará cuando hagamos click en el botón de eliminar. */
            onToggle={toggleTask } /* Esta función se activará o desactivará cuando hagamos click en cada una de las tareas. */
          />
        ))}
      </div>
    </>
  );
};

export default App;


{/* A AddTaskForm le pasaremos la función de añadir para usarla */}

{/* A Task le pasaremos el id como key, la tarea, y las funciones de borrado 
y completado para poder usarlas en cada tarea. */}

{/* Y también es donde haremos que se rendericen nuestros datos y componentes. */}