import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const ReadDiaryModal = ({id, closeOnClick}) => {
  const location = useLocation();
  return (
    <div>
      <dialog id={id} className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
          <h1 className="py-4 font-semibold text-center text-xl">DIARY MODAL</h1>
          
          
          {/* BUTTON HOLDER */}
          <div className="modal-action">
            <div className='flex w-full justify-evenly'>
              <button 
                className="btn"
                type='button'
                onClick={closeOnClick}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default ReadDiaryModal
