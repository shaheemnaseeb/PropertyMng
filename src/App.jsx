import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PropertyList from './components/PropertyList';
import AddProperty from './components/AddProperty'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PropertyList />}></Route>
        <Route index element={<PropertyList />}></Route>
        <Route path='/propertyList' element={<PropertyList />}></Route>
        <Route path='/addProperty' element={<AddProperty />}></Route>
      </Routes>
    </BrowserRouter> 
    </>
  );
}

export default App;