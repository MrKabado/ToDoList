import React, { useState, useEffect, createContext, useContext } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import NavBar from '../components/NavBar'
import { UserProvider, UserContext } from '../context/UserContext.jsx'
import { DiaryContext, DiaryProvider } from '../context/DiaryContext'

const HompageContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;
  
  const {user, setUser} = useContext(UserContext);

  const {diaries, setDiaries} = useContext(DiaryContext);

  const [indexVal, setIndexVal] = useState(0);

  const fetchUser = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/users/find-user', 
        {email}
      );

      if (response.data.success) {
        setUser(response.data.data);
        localStorage.setItem("user", JSON.stringify(response.data.data));
      }

    } catch (error) {
      console.log("error in axios ", error)
    } 
  }

  useEffect(() => {
    if (email) {
      fetchUser();
    }
  }, [email]);

  return (
    <>  
      <NavBar />

      <div className='flex flex-col h-screen items-center'>
        <div className='w-full flex flex-col justify-center items-center p-5 mt-10 gap-10'>

          <div className='shadow-md rounded-md w-full p-4'>
            <h1 className='text-center'>
              Hello, <span className='font-semibold'>{user?.name || "Guest"}</span><br />
              ready to write a new diary today? ❤️
            </h1>
          </div>

          <div className='shadow-md rounded-md w-full flex flex-col items-center gap-3 p-2'>
            <h1 className='font-semibold text-center'>Your Latest Diaries</h1>
              <div className='w-full'>
                <table className='w-full'>
                  <tbody className='flex flex-col gap-2'>
                    { diaries.length > 0 ? 
                    (
                      (diaries.length <= 3 ? diaries : diaries.slice(0, 3)).map((diaries, index) => (
                        <tr 
                          key={index}
                          className='flex justify-between px-4 py-2 rounded-md shadow-md'
                        >
                          <td>
                            {diaries.title}
                          </td>

                          <td>
                            {diaries.date}
                          </td>

                          <td>{diaries.time}</td>
                        </tr>                 
                      ))
                    ) : (
                      <tr className='w-full shadow-md rounded-md px-4 py-2 flex'>
                        <td colSpan="2" className='text-center w-full'>No diaries yet</td>
                      </tr>
                    )
                  }
                  </tbody>
                </table>
              </div>
            <button 
              onClick={() => navigate('/diaries', {state: {email}})}
              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500'>
                View All
            </button>
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




const HomePage = () => {
  const location = useLocation();
  const email = location.state?.email;
  return (
    <UserProvider>
      <DiaryProvider email={email}>
        <HompageContent />
      </DiaryProvider>
    </UserProvider>
  )
}

export default HomePage
