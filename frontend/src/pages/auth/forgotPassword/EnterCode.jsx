import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';

const EnterCode = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;
  const [inputOtp, setInputOpt] = useState();
  const [otp, setOtp] = useState();
  const [disabled, setDisabled] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (disabled && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else if (timer <= 0) {
      setDisabled(false);
    }

    return () => clearInterval(interval);
  }, [disabled, timer]);


  const generateOTP = async () => {
    const randomNumber = Math.floor(Math.random() * 999999) + 111111;
    try {
      const response = await axios.post('http://localhost:8080/api/users/otp-code', { otp: randomNumber, email: email});

      if (response) {
        setDisabled(true);
        setTimer(30);
        alert(response.data.message);
        setOtp(response.data.otpCode);

        setTimeout(() => {
          setDisabled(false);
        }, 30000);
      }
    } catch (err) {
      console.log("axios problem", err);
    }
  }

  const checkOtp = (e) => {
    e.preventDefault()
    if (inputOtp == otp) {
      alert("Success");
      navigate('/new-password', {state: {email}});
    } else {
      alert("Otp Incorrect")
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
          <form onSubmit={checkOtp} className="space-y-6" method="POST">
            <div>
              <div className='flex justify-between'>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                  Enter OTP code
                </label>

                <button
                  id="otp-btn"
                  type='button'
                  className='block text-sm/6 font-medium text-gray-900 dark:text-gray-100 text-indigo-500 text-center'
                  disabled={disabled}
                  onClick={generateOTP}
                >
                  {disabled ? `Resend in ${timer}s` : "Send Code"}
                </button>
              </div>
              <div className="mt-2">
                <input
                  id="otpCode"
                  name="otpCode"
                  type="number"
                  required
                  onChange={(e) => setInputOpt(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                >
                  Next
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
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default EnterCode
