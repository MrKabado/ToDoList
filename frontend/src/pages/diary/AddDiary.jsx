import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddDiary = () => {
  const Navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    message: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const sendDiary = await axios.post("http://localhost:8080/api/diares/", form);
      if (sendDiary.data.success) {
        alert('Success');
        alert("Done submitting the diary title: " + sendDiary.data.diary.title);
        window.location.reload();
      }

    } catch (error) {
      console.log(error);
    }
  }

  

  return (
    <div className='border'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-5 border m-5 p-5'
      > 
        <h1 className='text-center font-semibold'>ADD FORM</h1>

        <input 
          type="text" 
          name='title'
          placeholder='Enter title'
          className='border p-1 rounded-md text-center'
          onChange={(e) => setForm(prev => ({...prev, title: e.target.value}))}
          required
        />

        <div className='flex flex-row border text-center p-1 rounded-md gap-5'>
          <div className=''>
            <label htmlFor="date">Date</label>
            <input 
              type="date" 
              name='date'
              id='date'
              onChange={(e) => setForm(prev => ({...prev, date: e.target.value}))}
              required
            />
          </div>

          <div className=''>
            <label htmlFor="time">Time</label>
            <input 
              type="time" 
              name='time'
              id='time'
              onChange={(e) => setForm(prev => ({...prev, time: e.target.value}))}
              required
            />
          </div>
        </div>

        <textarea 
          name="message" 
          id="message" 
          cols="30" 
          rows="10"
          placeholder='message'
          className='border p-1 rounded-md text-center'
          onChange={(e) => setForm(prev => ({...prev, message: e.target.value}))}
          required
          >

        </textarea>

        <div className='flex justify-between'>
          <button 
            className='border py-1 px-2 rounded-md'
            onClick={() => Navigate('/homepage')}
          >
            Return
          </button>
          
          <button
            type='submit'
            className='border py-1 px-2 rounded-md'
          >
            Submit
          </button>
        </div>
        
      </form>
    </div>
  )
}

export default AddDiary
