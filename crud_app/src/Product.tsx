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
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [deletingProductId, setDeletingProductId] = useState<number | null>(null);
    const navigate = useNavigate();

    const handleAddProduct =() =>{
      navigate('/AddProduct')
    }

    const handleUpdate = (id : number) => {
      navigate('/UpdateProduct',{state:{data:id}})
    };

    const handleView = (id : number) => {
      navigate('/ViewProduct',{state:{data:id}})
    };


  const handleDelete = (id: number) => {
    setDeletingProductId(id);
    setShowConfirmation(true);
  };
  const confirmDelete = () => {
    console.log('Deleting product with ID:', deletingProductId);
    const updatedTasks = products.filter((task) => task.id !== deletingProductId);
    localStorage.setItem('product', JSON.stringify(updatedTasks));
    setProducts(updatedTasks);
    setShowConfirmation(false);
    const deletedProducts=fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE',
    });

  };

  const cancelDelete = () => {
    console.log('Cancelled deletion');
    setShowConfirmation(false);
    setDeletingProductId(null);
  };

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        const jsonData: Todo[] = await response.json();

        localStorage.setItem("product", JSON.stringify(jsonData));

        setProducts(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    if(localStorage.getItem("product")){
      const data = localStorage.getItem("product");

      if(data){
        setProducts(JSON.parse(data));
      }
    }
    else{
      fetchData(); 
    }
  }, []); 

  console.log("Products:", products);

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
                <td><button onClick={() => handleView(product.id)}>View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        {showConfirmation && (
  <div
    style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '20px',
      border: '1px solid #ccc',
      textAlign: 'center',
    }}
  >
    <h3>Confirm Deletion</h3>
    <p>Are you sure you want to remove this task?</p>
    <div style={{ marginTop: '20px' }}>
      <button style={{ marginRight: '10px' }} onClick={confirmDelete}>
        Yes
      </button>
      <button onClick={cancelDelete}>No</button>
    </div>
  </div>
)}
      </div>
    );
  };

  export default Product;


