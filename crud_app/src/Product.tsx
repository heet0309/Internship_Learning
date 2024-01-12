import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Product = () => {
  const [products, setProducts] = useState<Todo[]>([]);
  const navigate = useNavigate();

  const handleAddProduct =() =>{
    navigate('/AddProduct')
  }
  

  const handleUpdate = (id : number) => {
    navigate('/UpdateProduct',{state:{data:id}})
  };

  const handleDelete = (id:number) => {
    const shouldRemove = window.confirm("Are you sure you want to remove this task?");
    if (shouldRemove) {
        const updatedTasks = products.filter((task) => task.id !== id);
        localStorage.setItem("product", JSON.stringify(updatedTasks));
        setProducts(updatedTasks);
    }
}


  useEffect(() => {
      try {
        const retrievedData = localStorage.getItem("product");

        if (retrievedData) {
          setProducts(JSON.parse(retrievedData));}
        } catch (error) {
        console.error('Error fetching data:', error);
      }}
  , []);
  


  return (
    <div>
      <h2>All Products From Local Storage</h2>
      <button onClick={handleAddProduct}>Add Product</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>UserId</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.userId}</td>
              <td>{product.title}</td>
              <td>{product.completed ? 'Yes' : 'No'}</td>
              <td><button onClick={() => handleUpdate(product.id)}>Update</button></td>
              <td><button onClick={() => handleDelete(product.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;


