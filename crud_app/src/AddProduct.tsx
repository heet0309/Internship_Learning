import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
    const navigate=useNavigate();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<Todo>({
    userId: 0,
    id: 0,
    title: '',
    completed: false,
  });
  useEffect(() => {
    // Retrieve data from local storage
    const retrievedData = localStorage.getItem("product");

    if (retrievedData) {
      setTodos(JSON.parse(retrievedData));
    }
  }, []);

  const handleAddTodo = () => {
    const newTodoItem: Todo = {
      userId: newTodo.userId,
      id: newTodo.id,
      title: newTodo.title,
      completed: newTodo.completed,
    };
  
    const updatedTodos = [...todos, newTodoItem];
  
    setTodos(updatedTodos);
   console.log(updatedTodos);
    localStorage.setItem('product', JSON.stringify(updatedTodos));
  
navigate("/Product");

  };

  return (
    <div>
          <div>
        <label>ID: </label>
        <input
          type="number"
          onChange={e =>
            setNewTodo({ ...newTodo, id: parseInt(e.target.value) })
          }
        />
      </div>
      <div>
        <label>User ID: </label>
        <input
          type="number"
          onChange={e =>
            setNewTodo({ ...newTodo, userId: parseInt(e.target.value) })
          }
        />
      </div>
      <div>
        <label>Title: </label>
        <input
          type="text"
          onChange={e =>
            setNewTodo({ ...newTodo, title: e.target.value })
          }
        />
      </div>
      <div>
        <label>Completed: </label>
        <input
          type="checkbox"
          onChange={e =>
            setNewTodo({ ...newTodo, completed: e.target.checked })
          }
        />
      </div>
      <button onClick={handleAddTodo}>ADD</button>
    </div>
  );
};

export default App;
