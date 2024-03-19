import { useState } from 'react'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Add from './components/add/Add'
import Delete from './components/delete/Delete'
import Edit from './components/edit/Edit'
import Get from './components/get/Get'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>

      <nav>
        <h1>Avion</h1>
        <NavLink to='/add'><button className='add'>Add product...</button></NavLink>
      </nav>



    

     





        <Routes>
          <Route path='/' element={<Get/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/delete' element={<Delete/>}/>
          <Route path='/edit' element={<Edit/>}/>

        </Routes>
    </div>
  )
}

export default App
