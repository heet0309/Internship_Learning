  import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { useEffect } from 'react';

  interface UserCredentials {
    username: string;
    password: string;
  }

  const Login: React.FC = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState<UserCredentials>({
      username: '',
      password: '',
    });

  
  
  useEffect(() => {
  const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (isLoggedIn==="true") {
      navigate('/Home');
    }
  }, [ navigate]);
   
    


    const handleInputChange = (
      event: React.ChangeEvent<HTMLInputElement>,
      field: keyof UserCredentials
    ) => {
      setCredentials({
        ...credentials,
        [field]: event.target.value,
      });
    };

    const handleLogin = () => {
      if (credentials.username === 'heet' && credentials.password === 'heet') {
        localStorage.setItem("isLoggedIn","true");
        navigate('/Home')
      } else {
        alert('Invalid credentials. Please try again.');
      }
    };

    return (
      <div>
        <h2>Login</h2>
        <form>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={credentials.username}
              onChange={(e) => handleInputChange(e, 'username')}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => handleInputChange(e, 'password')}
            />
          </div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    );
  };

  export default Login;



  