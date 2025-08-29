import React, {useContext, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { UserContext, UserProvider } from '../../context/UserContext.jsx'
import { DiaryProvider, DiaryContext } from '../../context/DiaryContext.jsx'
import NavBar from '../../components/NavBar.jsx'
import Button from '../../components/Button.jsx'

const DiaryListContent = () => {
  const navigate = useNavigate();

  const {diaries, setDiaries} = useContext(DiaryContext);
 
  return (
    <>
      <NavBar />
      
      <div className='flex flex-col h-screen items-center'>
        <div className='w-full flex flex-col justify-center items-center p-5 mt-10 gap-10'>
          <h1 className='font-bold text-2xl'>Your Diaries</h1>

          <div className='flex flex-col p-2 w-full gap-2'>
            <div className='flex justify-between px-2 shadow-md rounded-md py-2'>
                    <h1
                      className='font-semibold text-center w-full text-center'
                    >
                      Title
                    </h1>

                    <p className='font-semibold w-full text-center'>Date</p>
                    <p className='font-semibold w-full text-center'>Time</p>
            </div>
            {
              diaries.length > 0 ? 
              (
                diaries.map((diaries, index) => (
                  <div
                    key={index}
                    className='flex justify-between px-2 shadow-md rounded-md py-2'
                  >
                    <h1
                      className='font-semibold text-center w-full text-center'
                    >
                      {diaries.title}
                    </h1>

                    <p className='font-semibold w-full text-center'>{diaries.date}</p>
                    <p className='font-semibold w-full text-center'>{diaries.time}</p>
                  </div>
                ))
              ) : (
                <div>
                  <h1>No diaries yet</h1>
                </div>
              )
            }
          </div>

          <Button 
            text="Go back home"
            divClassName="w-full"
            type="button"
            btnClassName="w-full"
            onClick={() => navigate('/homepage')}
          />

        </div>
      </div>

    </>
  )
}


const DiaryList = () => {
  
  const location = useLocation();
  const email = location.state?.email;

  return (
    <UserProvider>
      <DiaryProvider email={email}>
        <DiaryListContent />
      </DiaryProvider>
    </UserProvider>
  )
}

export default DiaryList
