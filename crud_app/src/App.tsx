import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Product from './Product';
import UpdateProduct from './UpdateProduct';
import AddProduct from './AddProduct';
import ViewProduct from './ViewProduct'


const App: React.FC = () => {

  return (
    <Router>
     <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Product" element={<Product/>}/>
        <Route path='/AddProduct' element={<AddProduct/>}></Route>
        <Route path='/UpdateProduct' element={<UpdateProduct/>}/>
        <Route path='/ViewProduct' element={<ViewProduct/>}/>
        </Routes>
    </Router>
  );
};

export default App;

