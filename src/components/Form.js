import React from 'react'
import { useForm } from 'react-hook-form';

function Form() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    console.log(errors)
    return (
        <div className='container'>
            <main>
                <div className='form-container'>
                    <form onSubmit={handleSubmit((data) => console.log(data))}>
                        <h2>Registration Form</h2>
                        <div className='form-content'>
                            <div className='inputs'>
                                <label>Name</label>
                                <input {...register('fullName', {
                                    required: 'Full name is required',
                                    pattern: {
                                        value: /^[A-Za-z\s]{4,}$/,
                                        message: 'Alphabets only (min - 4)',
                                    },
                                })}

                                    type='text'
                                    autoComplete="off"
                                    placeholder='Enter Full Name'
                                />
                                <p className='invalid'>{errors.fullName?.message}</p>
                            </div>

                            <div className='inputs'>
                                <label>User Name</label>
                                <input {...register('username', {
                                    required: 'Username is required',
                                    pattern: {
                                        value: /^(?=.*[0-9])(?=.*[a-z])[a-z0-9]{8,}$/,
                                        message: 'numbers & alphabets (min-8)',
                                    },
                                })} type='text' placeholder='Enter User Name' />
                                <p className='invalid'>{errors.username?.message}</p>
                            </div>

                            <div className='inputs'>
                                <label>E-mail</label>
                                <input {...register('email', {
                                    required: 'E-mail is required',
                                    pattern: {
                                        value: /^\S+@\S+\.\S+$/,
                                        message: 'Please enter valid E-mail',
                                    },
                                })} type='text' name='email' placeholder='Enter Your E-mail' />
                                <p className='invalid'>{errors.email?.message}</p>
                            </div>

                            <div className='inputs'>
                                <label>Phone Number</label>
                                <input  {...register('phoneNumber', {
                                    required: 'Phone number is required',
                                    pattern: {
                                        value: /^\d{10}$/,
                                        message: 'Enter a valid 10-digit number',
                                    },
                                })} type='number' name='phoneNumber' placeholder='Enter Your Phone Number' />
                                <p className='invalid'>{errors.phoneNumber?.message}</p>
                            </div>

                            <div className='inputs'>
                                <label>Adress</label>
                                <input {...register("address", {
                                    required: 'Address is required',
                                    minLength: {
                                        value: 8,
                                        message: 'Address is required (min - 8)'
                                    }
                                })} type='text' name='address' placeholder='Enter Your address' />
                                <p className='invalid'>{errors.address?.message}</p>
                            </div>

                            <div className='inputs'>
                                <span className='gender-title'>Gender</span>
                                <div className='gender-catagory'>
                                    <input {...register("gender")} type='radio' name='gender' />
                                    <label>Male</label>
                                    <input type='radio' name='gender' value='female' />
                                    <label for='female'>Female</label>
                                    <input type='radio' name='gender' value='others' />
                                    <label for='others'>Others</label>
                                </div>
                                <p className='invalid'></p>
                            </div>

                        </div>
                        <input type='submit' value='submit' className='button' />
                    </form>

                </div>
            </main>
        </div>
    )
}

export default Form