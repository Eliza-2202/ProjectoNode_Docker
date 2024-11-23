import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'


function App() {
return (



    <BrowserRouter>
      <div>
        <h1 className='text-4xl font-bold'>
          Menu
        </h1>
      </div> 

      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/tasks' element={<h1>Tasks page</h1>} />
        <Route path='/add-task' element={<h1>new task</h1>} />
        <Route path='/tasks/:id' element={<h1>update task</h1>} />
        <Route path='/profile' element={<h1>profile</h1>} />

        <Route path="/dashboard" element={<Dashboard />} />
        

      </Routes>

    </BrowserRouter>
)
}
export default App