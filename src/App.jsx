import React from 'react'
import './App.css'

function App() {
  return (
    <div className='App'>
      <h1 className='font-black text-2xl'>React Hook Form</h1>
      <form className='p-4 shadow-lg flex flex-col space-y-4'>
        <div className='flex flex-col  items-start space-y-1 '>
          <input
            type='text'
            name='firstName'
            className='min-w-full'
            placeholder='First name'
          />
          <p className='text-red-500 inline-flex'>Firstname is required</p>
        </div>
        <div className='flex flex-col  items-start space-y-1 '>
          <input
            type='text'
            name='lastName'
            className='min-w-full'
            placeholder='Last name'
          />
          <p className='text-red-500 inline-flex'>Lastname is required</p>
        </div>
        <div className='flex flex-col  items-start space-y-1 '>
          <input
            type='text'
            name='email'
            className='min-w-full'
            placeholder='Email'
          />
          <p className='text-red-500 inline-flex'>Should be a valid email</p>
        </div>
        <button className='bg-teal-500 hover:bg-teal-600 active:bg-teal-500 py-2 px-3 text-white uppercase'>
          submit
        </button>
      </form>
      <div className='my-4 p-4 bg-gray-300'>
        <h3 className='font-bold'>Form values:</h3>
        <pre className=''>{JSON.stringify({}, null, 2)}</pre>
      </div>
    </div>
  )
}

export default App
