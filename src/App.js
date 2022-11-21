import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fblogopage from './Fblogopage';
import SubForm from './SubForm';

function App() {
  return (
    
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Fblogopage/>}></Route>
  <Route path='/reg' element={<SubForm/>}></Route>
</Routes>
</BrowserRouter>

</>
  );

}

export default App;
