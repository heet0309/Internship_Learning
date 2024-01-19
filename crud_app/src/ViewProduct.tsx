import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const ViewProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.data || "123";

  const [storedData, setStoredData] = useState<Todo[]>([]);

  useEffect(() => {
    const retrievedData = localStorage.getItem("product");

    if (retrievedData) {
      setStoredData(JSON.parse(retrievedData));
    }
  }, []);

  const Userdata = storedData.filter((task) => task.id === parseInt(data, 10));


    return (
        <div style={{ margin: 20 }}>
          <h2>Update Product</h2>
          {Userdata.map((item) => (
            <form key={item.id} style={{ margin: 20 }}>
              <label>
                Id:
                <input type="text" name="id" value={item.id}  readOnly />
              </label>
              <br />
              <label>
                UserID:
                <input
                  type="number" name="userId" value={item.userId} readOnly 
                />
              </label>
              <br />
              <label>
                Title:
                <input type="text" name="title" value={item.title} readOnly />
              </label>
              <br />
              <label>
                Completed:
                <input type="checkbox" name="completed" checked={item.completed} disabled={true}
                />
              </label>
              <br />
            </form>
          ))}
        </div>
      );
    };
    

export default ViewProduct;