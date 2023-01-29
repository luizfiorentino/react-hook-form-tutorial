import React from 'react'
import './App.css'

function Complex() {
  // const { formState, register, handleSubmit, setValue } = useForm({
  //   defaultValues: {
  //     firstName: '',
  //     lastName: '',
  //     favoriteColor: '',
  //     toppings: [],
  //     base: '',
  //   },
  //   mode: 'onTouched',
  // })

  return (
    <div className='App'>
      <h1 className='font-black text-2xl'>React Hook Form</h1>
      <div className='p-4 shadow-lg flex flex-col space-y-4'>
        <form
        // onSubmit={handleSubmit(values => {
        //   console.log(values)
        //   alert(JSON.stringify(values, null, 2))
        // })}
        >
          <div className='flex flex-col  items-start space-y-4 '>
            <input
              type='text'
              placeholder='First name'
              className='min-w-full'
              // {...register('firstName', {
              //   required: { value: true, message: 'First name is required' },
              //   minLength: { value: 3, message: 'Min length is 3' },
              //   maxLength: { value: 9, message: 'Max length is 5' },
              // })}
            />
            {/* {formState.errors.firstName && (
              <p className='text-red-500 inline-flex'>
                {formState.errors.firstName.message}
              </p>
            )} */}
            <input
              type='text'
              placeholder='Last name'
              className='min-w-full'
              // {...register('lastName', {
              //   required: { value: true, message: 'First name is required' },
              //   minLength: { value: 3, message: 'Min length is 3' },
              //   maxLength: { value: 9, message: 'Max length is 5' },
              // })}
            />
            {/* {formState.touchedFields.lastName && formState.errors.lastName && (
              <p className='text-red-500 inline-flex'>
                {formState.errors.lastName.message}
              </p>
            )} */}

            <div>
              <p className='font-semibold'>Favorite Color</p>
              <div className='flex space-x-4'>
                <div className='flex space-x-2 items-center'>
                  <label htmlFor='red'>Red</label>
                  <input
                    id='red'
                    type='radio'
                    // {...register('favoriteColor', {
                    //   required: 'Favorite color is required',
                    // })}
                    value='red'
                  />
                </div>
                <div className='flex space-x-2 items-center'>
                  <label htmlFor='red'>Green</label>
                  <input
                    id='green'
                    type='radio'
                    // {...register('favoriteColor', {
                    //   required: 'Favorite color is required',
                    // })}
                    value='Green'
                  />
                </div>
                <div className='flex space-x-2 items-center'>
                  <label htmlFor='blue'>Blue</label>
                  <input
                    id='blue'
                    type='radio'
                    // {...register('favoriteColor', {
                    //   required: 'Favorite color is required',
                    // })}
                    value='Blue'
                  />
                </div>
              </div>
            </div>

            <div>
              <p className='font-semibold'>Toppings</p>
              <div className='flex flex-col space-y-2'>
                <div className='flex space-x-2 items-center'>
                  <label htmlFor='chicken'>Chicken</label>
                  <input
                    type='checkbox'
                    id='chicken'
                    value='Chicken'
                    // {...register('toppings', { required: 'This is required' })}
                  />
                </div>
                <div className='flex space-x-2 items-center'>
                  <label htmlFor='ham'>Ham</label>
                  <input
                    type='checkbox'
                    id='ham'
                    value='Ham'
                    // {...register('toppings', { required: 'This is required' })}
                  />
                </div>
                <div className='flex space-x-2 items-center'>
                  <label htmlFor='cheese'>Cheese</label>
                  <input
                    type='checkbox'
                    id='cheese'
                    value='Cheese'
                    // {...register('toppings', {
                    //   required: 'This is required',
                    //   min: {
                    //     value: 2,
                    //     message: 'Atlease one topping is required',
                    //   },
                    // })}
                  />
                </div>
                {/* {formState.errors.toppings && (
                  <p className='text-red-500'>
                    {formState.errors.toppings.message}
                  </p>
                )} */}
              </div>
            </div>

            <div className='min-w-full'>
              <select
                className='min-w-full'
                id='base'
                // {...register('base', { required: 'Base is required' })}
              >
                <option value=''>Select one base</option>
                <option value='Thin crust'>Thin crust</option>
                <option value='Cheese burst'>Cheese burst</option>
              </select>
              <p className='text-red-500'>
                {/* {formState.errors.base && formState.errors.base.message} */}
              </p>
            </div>

            <button
              className='bg-teal-500 hover:bg-teal-600 active:bg-teal-500 py-2 px-3 text-white uppercase'
              type='submit'
            >
              submit
            </button>
          </div>
        </form>
        <button
          className='bg-teal-500 hover:bg-teal-600 active:bg-teal-500 py-2 px-3 text-white'
          // onClick={() => setValue('firstName', 'mafia')}
        >
          set value of firstname to Mafia
        </button>
      </div>
      <div className='my-4 p-4 bg-gray-300'>
        <h3 className='font-bold'>Form state:</h3>
        {/* <pre className=''>{JSON.stringify(formState, null, 2)}</pre> */}
      </div>
    </div>
  )
}

export default App
