import {React, useState} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'

const UpdatePass = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const [form, setForm] = useState({
    password: "",
    confirm_password: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password != form.confirm_password) {
      alert("Passwords do not match");
      return
    }

    try {
      const response = await axios.post('http://localhost:8080/api/users/update-password', {
        email,
        password: form.password
      });

      if (response.data.success) {
        alert(response.data.message);

        navigate('/login');
      }

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        console.log("Error in axios ", error);
      }
    }
  }


  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto dark:hidden"
          />
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="mx-auto h-10 w-auto not-dark:hidden"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
            Forgot password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                  New password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) => setForm(prev => ({...prev, password: e.target.value}))}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                />
              </div>

              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                  Confirm new password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirm_password"
                  name="confirm_password"
                  type="password"
                  onChange={(e) => setForm(prev => ({...prev, confirm_password: e.target.value}))}
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
              >
                Change
              </button>
            </div>

            <div>
              <Link
              to="/forgot-password"
              className="flex w-full justify-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm/6 font-semibold text-gray-700 shadow-sm hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus-visible:outline-gray-400"
              >
                Return
              </Link>
            </div>
          
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdatePass
