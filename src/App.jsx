import React from 'react'
import './App.css'

function App() {
  return (
    <div className='App'>
      <h1 className='font-black text-2xl'>React Hook Form</h1>
      <div className='p-4 shadow-lg flex flex-col space-y-4'>
        <div className='flex flex-col  items-start space-y-1 '>
          <label htmlFor='username' className=''>
            Username
          </label>
          <input type='text' name='username' className='min-w-full' />
          <p className='text-red-500 inline-flex'>Username is required</p>
        </div>
        <button className='bg-teal-500 hover:bg-teal-600 active:bg-teal-500 py-2 px-3 text-white uppercase'>
          submit
        </button>
      </div>
      <div className='my-4 p-4 bg-gray-300'>
        <h3 className='font-bold'>Form values:</h3>
        <pre className=''>"Hellow"</pre>
      </div>
    </div>
  )
}

export default App
