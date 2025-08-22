import React, { useState } from 'react'
import { BookPlus } from 'lucide-react'
import AddDiary from '../components/modal/AddDiary'
import axios from 'axios'

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [form, setForm] = useState({
    title: "",
    date: "",
    message: "",
  })

  const handleSubmit = async (e) => {
    try {
      const postDiary = await axios.post('http://localhost:8080/api/data/diares', form)

      if (postDiary.data.success) {
        alert("success!");
      }
    } catch(error) {
      console.log('Error fetching data', error);
    }
  }

  return (
    <>
      <div className='flex flex-col p-10 h-screen items-center'>
        <div className='w-full flex flex-col justify-center items-center p-5 gap-10'>
          <div className='shadow-md rounded-md w-full p-2'>
            <h1 className='font-semibold text-center'>Your Diaries</h1>
            <div>

            </div>
          </div>

          <div className='border-dashed border-2 w-full flex flex-col items-center gap-3 p-2'>
            <h1 className='font-semibold text-center'>Add Diary</h1>
            <a href="">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(true);
                }}
              >


                <BookPlus className='h-10 w-10'/>
              </button>    
            </a>

            <p>Click the button to add diary</p>
          </div>
        </div>
      </div>

      <AddDiary 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
        onChangeTitle={(e) => setForm(prev => ({...prev, title: e.target.value}))}
        onChangeDate={(e) => setForm(prev => ({...prev, date: e.target.value}))}
        onChangeMessage={(e) => setForm(prev => ({...prev, message: e.target.value}))}
      
      />
    </>
  )
}

export default HomePage
