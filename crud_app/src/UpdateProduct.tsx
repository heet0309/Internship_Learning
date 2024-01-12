import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const UpdateProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.data || "123";

  const [storedData, setStoredData] = useState<Todo[]>([]);

  useEffect(() => {
    // Retrieve data from local storage
    const retrievedData = localStorage.getItem("product");

    if (retrievedData) {
      setStoredData(JSON.parse(retrievedData));
    }
  }, []);

  const Userdata = storedData.filter((task) => task.id === parseInt(data, 10));

  const [UserID, setUserID] = useState('');
  const [title, setTitle] = useState('');
  const [id, setId] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Update the corresponding data in storedData
    const updatedData = storedData.map((item) => {
      if (item.id === parseInt(data, 10)) {
        return {
          ...item,
          userId: parseInt(UserID, 10),
          title,
          data,
          completed,
        };
      }
      return item;
    });

    localStorage.setItem("product", JSON.stringify(updatedData));

    console.log(updatedData);
    setStoredData(updatedData);

    navigate('/Product');
  };

  return (
    <div style={{ margin: 20 }}>
      <h2>Update Product</h2>
      {Userdata.map((item) => (
        <form key={item.id} onSubmit={handleSubmit} style={{ margin: 20 }}>
          <label>
            Id:
            <input type="text" name="id" value={item.id} onChange={(e) => setId(e.target.value)} />
          </label>
          <br />
          <label>
            UserID:
            <input
              type="number"
              name="userId"
              value={UserID}
              onChange={(e) => setUserID(e.target.value)}
            />
          </label>
          <br />
          <label>
            Title:
            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <br />
          <label>
            Completed:
            <input
              type="checkbox"
              name="completed"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
          </label>
          <br />
          <button type="submit">Update</button>
        </form>
      ))}
    </div>
  );
};

export default UpdateProduct;
