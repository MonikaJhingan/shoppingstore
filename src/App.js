import './App.css';
import React from 'react';
import Home from './Page/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import PageNotFound from './Page/PageNotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/*' element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
