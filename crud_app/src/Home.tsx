import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const navigateToProductPage = () => {
    navigate('/Product')
};

const handleLogOut = () => {
    localStorage.setItem("isLoggedIn","false");
    navigate('/')
};
  return (
    
      <div>
        <h2>Welcome to the Home Page!</h2>
        <button onClick={navigateToProductPage}>Products</button>
        <div>
        <button onClick={handleLogOut}>Logout</button>
      </div>
      </div>
    );
  };
  



export default Home;
