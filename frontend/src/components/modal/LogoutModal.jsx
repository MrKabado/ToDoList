import React from 'react'
import { Link } from 'react-router-dom'

const LogoutModal = ({id, cancelOnclick}) => {
  return (
    <div>
      <dialog id={id} className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
          <h1 className="py-4 font-semibold text-center text-xl">Are you sure you want to log out?</h1>
          <div className="modal-action">
            <div className='flex w-full justify-evenly'>
              <button 
                className="btn"
                type='button'
                onClick={cancelOnclick}
              >
                Cancel
              </button>

              <Link 
                className="btn bg-red-600 text-white transition hover:bg-red-700"
                to="/login"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default LogoutModal
