import React from 'react'
import Button from '../components/Button'
import diaryImage from '../assets/diary-blue.jpg'

const LandingPage = () => {
  return (
    <div className='flex justify-center h-screen'>
      <div className='shadow-md rounded-lg flex flex-col justify-center items-center self-center h-fit w-fit m-5 p-5 gap-5'>
        <h1 className='text-3xl font-semibold'>
          The Diary
        </h1>
        <p className='text-center font-semibold'>“Your private space to write, reflect, and remember.”</p>

        <div className='rounded-lg w-full flex justify-center'>
          <img 
            src={diaryImage} 
            alt=""
            className='rounded-lg sm:w-[400px]'
          />
        </div>

        <div className='w-full flex flex-col gap-5'>
          <Button 
            text="Sign In"
            to='/login'
            btnClassName='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500'           
          />

          <Button 
            text="Sign up"
            to='/register'
            btnClassName='flex w-full justify-center rounded-md border border-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-indigo-600 shadow-xs hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-900'
          />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
