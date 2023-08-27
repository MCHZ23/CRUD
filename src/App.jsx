
import { useEffect } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'


function App() {


  const baseUrl = 'https://users-crud.academlo.tech'
  const [ 
    users,
    getAllUsers,
    createNewUser,
    delectUserById,
    updateUserById 
  ] = useFetch(baseUrl)

  useEffect(() =>  { 
    getAllUsers('/users')
  }, [])


  return (
    <div className='app'>
      <h1>semana 4</h1>
      <div>
      {
        users?.map((user) => (
          <UserCard key={user.id} user={user}/>
        )) 
      }
      </div>
    </div>
  )
}

export default App
