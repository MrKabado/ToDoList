import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../../components/NavBar';

const AddDiary = () => {
  const Navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [form, setForm] = useState({
    email: user?.email || "",
    title: "",
    date: "",
    time: "",
    message: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const sendDiary = await axios.post("http://localhost:8080/api/diares/create-diary", form);
      if (sendDiary.data.success) {
        alert(sendDiary.data.message);
        window.location.reload();
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-5 m-5 p-5'
      > 
        <h1 className='text-center font-semibold'>ADD FORM</h1>

        <div>
          <label htmlFor="title" className='block text-sm/6 font-medium text-gray-900 dark:text-gray-100'>
            Title
          </label>
          <div className='mt-2'>
          <input 
            id='title'
            type="text" 
            name='title'
            className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500'
            onChange={(e) => setForm(prev => ({...prev, title: e.target.value}))}
            required
          />
          </div>
        </div>

        <div className='grid grid-cols-2 text-center p-1 rounded-md gap-5'>
          <div className=''>
            <label htmlFor="date" className='block text-sm/6 font-medium text-gray-900 dark:text-gray-100'>
              Date
            </label>
            <div className='mt-2'>
              <input 
                type="date" 
                name='date'
                id='date'
                onChange={(e) => setForm(prev => ({...prev, date: e.target.value}))}
                className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500'
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="time" className='block text-sm/6 font-medium text-gray-900 dark:text-gray-100'>
              Time
            </label>
            <div className='mt-2'>
              <input 
                type="time" 
                name='time'
                id='time'
                className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500'               
                onChange={(e) => setForm(prev => ({...prev, time: e.target.value}))}
                required
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="message" className='block text-sm/6 font-medium text-gray-900 dark:text-gray-100'>Message</label>
          <div className='mt-2'>
            <textarea 
              name="message" 
              id="message" 
              cols="30" 
              rows="10"
              className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500'                              
              onChange={(e) => setForm(prev => ({...prev, message: e.target.value}))}
              required
              >

            </textarea>
          </div>
        </div>

        <div className='flex flex-col-reverse gap-3'>
          <button 
            className='border py-1 px-2 rounded-md'
            onClick={() => Navigate('/homepage')}
          >
            Return
          </button>
          
          <button
            type='submit'      
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
          >
            Submit
          </button>
        </div>
        
      </form>
    </div>
  )
}

export default AddDiary
