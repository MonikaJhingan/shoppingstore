import './App.css';
import CardGrid from './Components/CardGrid';
import Navbar from './Components/Navbar';
import ProductListing from './Components/ProductListing';
import ProductDetails from './Components/ProductDetails';
import {Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <CardGrid/>
    
      <Route path='/' component={ProductListing}/>
      <Route path='/product/:productId' component={ProductDetails}/>
      <Route>404 Not Found</Route>
      
      </Router>
    </div>
  );
}

export default App;
