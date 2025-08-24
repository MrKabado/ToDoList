import React, { useState } from 'react'
import { BookPlus } from 'lucide-react'
import { Link } from 'react-router-dom'


const HomePage = () => {

  return (
    <>
      <div className='flex flex-col p-10 h-screen items-center'>
        <div className='w-full flex flex-col justify-center items-center p-5 gap-10'>
          <div className='shadow-md rounded-md w-full p-2'>
            <h1 className='font-semibold text-center'>Your Latest Diaries</h1>
            <div>

            </div>
          </div>

          <div className='shadow-md rounded-md w-full flex flex-col items-center gap-3 p-2'>
            <h1 className='font-semibold text-center'>Addw New Diary</h1>
            <Link to='add-diary'>
              <button>
                Add
              </button> 
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
