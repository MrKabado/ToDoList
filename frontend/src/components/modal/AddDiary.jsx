import React from 'react'

const AddDiary = ({isOpen, onClose, onSubmit, onChangeTitle, onChangeDate, onChangeMessage, onClick}) => {
  if (!isOpen) return null
  return (
    <div className='fixed inset-0 flex items-center justify-center w-full h-screen p-2'>
      <div 
        id='add_diary' 
        className='bg-white shadow-md flex flex-col justify-center h-fit items-center w-[80%] p-5 rounded-lg gap-10'
      >
        <div className='flex flex-col gap-5'>
          <h1 className='text-center font-semibold'>New Diary Entry</h1>
          <form onSubmit={onSubmit} className='flex flex-col gap-3 p-3'>
            <input 
              type="text"
              name='title'
              placeholder='title' 
              className='border p-1 rounded-md w-full'
              onChange={onChangeTitle}
            />
            
            <input 
              type="datetime-local"
              name='date'
              className='border p-1 rounded-md'
              onChange={onChangeDate}
            />
            
            <textarea 
              name="message" 
              id="" 
              placeholder='message'
              className='border p-1 rounded-md h-30'
              onChange={onChangeMessage}
            >

            </textarea>

            <div className='flex gap-10 w-full justify-evenly'>
              <button
                onClick={onClose}
                className='shadow-sm bg-red-400 px-3 py-1 rounded-md'
              >
                Close
              </button>

              <button
                onClick={onClick}
                className='shadow-sm bg-green-400 px-3 py-1 rounded-md'
                type='submit'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddDiary
