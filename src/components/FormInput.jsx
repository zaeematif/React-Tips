import React, { useState } from 'react'

const FormInput = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    zipCode: ''
  })

  const handleForm = e => {
    setForm(prev => (
        {   
            //spread previous values
            ...prev,
            
            //from name property
            [e.target.name]: e.target.value
        }
    ))

    console.log(form);
  }

  return (
    <form className='w-fit p-4 mx-auto'>
         
        <input onChange={handleForm} className='w-3/4 p-4 my-2 border border-black rounded-md' type="text" name="name" placeholder='name' />

        <input onChange={handleForm} className='w-3/4 p-4 my-2 border border-black rounded-md' type="text" name="email" placeholder='email' />

        <input onChange={handleForm} className='w-3/4 p-4 my-2 border border-black rounded-md'  type="text" name="password" placeholder='password' />

        <input onChange={handleForm} className='w-3/4 p-4 my-2 border border-black rounded-md' type="text" name="address" placeholder='address' />

        <input onChange={handleForm} className='w-3/4 p-4 my-2 border border-black rounded-md ' type="text" name="zipCode" placeholder='zipCode' />
        

    </form>
  )
}

export default FormInput