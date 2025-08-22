import React from 'react'
import Button from '../components/Button'

const LandingPage = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='border flex flex-col justify-center items-center self-center w-fit m-5 p-5 gap-5'>
        <h1>The Diary</h1>
        <p className='text-center'>“Your private space to write, reflect, and remember.”</p>

        <div>
          <Button 
            text="Sign In"
            to='/login'
          />

          <Button 
            text="Sign up"
            to='/register'
          />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
