import React, { useState, useEffect } from 'react'
import { BookPlus } from 'lucide-react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import NavBar from '../components/NavBar'

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const email = location.state?.email;
  
  const [name, setName] = useState("");

  const displayName = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/users/find-user', {email});

      if (response.data.success) {
        setName(response.data.data.name);

        localStorage.setItem("user", JSON.stringify(response.data.data));
      }

    } catch (error) {
      console.log("error in axios ", error)
    } 
  }

  useEffect(() => {
    if (email) {
      displayName();
    } else {
      const savedUser = localStorage.getItem("user");
      if(savedUser) {
        const parsedUser = JSON.parse(savedUser);
        setName(parsedUser.name);
      }
    }
  }, [email]);

  return (
    <>
      <div className='flex flex-col h-screen items-center'>
        <div className='w-full flex flex-col justify-center items-center p-5 mt-10 gap-10'>

          <div className='shadow-md rounded-md w-full p-4'>
            <h1 className='text-center'>
              Hello, <span className='font-semibold'>{name}</span><br />
              ready to write a new diary today? ❤️
            </h1>
          </div>

          <div className='shadow-md rounded-md w-full flex flex-col items-center gap-3 p-2'>
            <h1 className='font-semibold text-center'>Your Latest Diaries</h1>
            <Link 
              to='add-diary' 
              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500'>
                View All
            </Link>
          </div>

          <div className='shadow-md rounded-md w-full flex flex-col items-center gap-3 p-2'>
            <h1 className='font-semibold text-center'>Add New Diary</h1>
            <Link 
              to='add-diary' 
              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500'>
                Add
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
