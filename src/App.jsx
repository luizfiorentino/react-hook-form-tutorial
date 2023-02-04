import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import './App.css'

const formSchema = z.object({
  firstName: z.string().min(4, 'min 4 chars').max(8, 'max 8 chars'),
  lastName: z.string().min(4, 'min 4 chars').max(8, 'max 8 chars'),
  email: z.string().email(),
})

function App() {
  const {
    formState: { errors },
    register,
    handleSubmit,
    getValues,
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    mode: 'all',
    resolver: zodResolver(formSchema),
  })

  console.log(errors)

  return (
    <div className='App'>
      <h1 className='font-black text-2xl'>React Hook Form</h1>
      <form
        onSubmit={handleSubmit(values => {
          alert(JSON.stringify(values, null, 2))
        })}
        className='p-4 shadow-lg flex flex-col space-y-4'
      >
        <div className='flex flex-col  items-start space-y-1 '>
          <input
            type='text'
            className='min-w-full'
            placeholder='First name'
            {...register('firstName')}
          />
          {errors.firstName && (
            <p className='text-red-500 inline-flex'>
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className='flex flex-col  items-start space-y-1 '>
          <input
            type='text'
            className='min-w-full'
            placeholder='Last name'
            {...register('lastName')}
          />
          {errors.lastName && (
            <p className='text-red-500 inline-flex'>
              {errors.lastName.message}
            </p>
          )}
        </div>
        <div className='flex flex-col  items-start space-y-1 '>
          <input
            type='text'
            className='min-w-full'
            placeholder='Email'
            {...register('email')}
          />
          {errors.email && (
            <p className='text-red-500 inline-flex'>{errors.email.message}</p>
          )}
        </div>
        <button className='bg-teal-500 hover:bg-teal-600 active:bg-teal-500 py-2 px-3 text-white uppercase'>
          submit
        </button>
      </form>

      <button
        onClick={() => setValue('firstName', 'Mafia')}
        className='bg-red-500 hover:bg-red-600 active:bg-red-500 py-2 px-3 text-white uppercase'
      >
        Set value of First name
      </button>
      <div className='my-4 p-4 bg-gray-300'>
        <h3 className='font-bold'>Form values:</h3>
        <pre className=''>{JSON.stringify(watch(), null, 2)}</pre>
      </div>
    </div>
  )
}

export default App
