import React from 'react'

function Form() {
    return (
        <div className='container'>
            <main>
                <div className='form-container'>
                    <form>
                        <h2>Registration Form</h2>
                        <div className='form-content'>
                            <div className='inputs'>
                                <label for='name'>First Name</label>
                                <input type='text' name='FirstName' placeholder='Enter Full Name' />
                                <p className='invalid'></p>
                            </div>

                            <div className='inputs'>
                                <label for='username'>User Name</label>
                                <input type='text' name='userName' placeholder='Enter User Name' />
                                <p className='invalid'></p>
                            </div>

                            <div className='inputs'>
                                <label for='email'>E-mail</label>
                                <input type='text' name='email' placeholder='Enter Your E-mail' />
                                <p className='invalid'></p>
                            </div>

                            <div className='inputs'>
                                <label for='phoneNumber'>Phone Number</label>
                                <input type='number' name='phoneNumber' placeholder='Enter Your Phone Number' />
                                <p className='invalid'></p>
                            </div>

                            <div className='inputs'>
                                <label for='address'>Adress</label>
                                <input type='text' name='address' placeholder='Enter Your address' />
                                <p className='invalid'></p>
                            </div>

                            <div className='inputs'>
                                <span className='gender-title'>Gender</span>
                                <div className='gender-catagory'>
                                    <input type='radio' name='gender' id='male' />
                                    <label for='male'>Male</label>
                                    <input type='radio' name='gender' id='female' />
                                    <label for='female'>Female</label>
                                    <input type='radio' name='gender' id='others' />
                                    <label for='others'>Others</label>
                                </div>
                                <p className='invalid'></p>
                            </div>

                        </div>
                    </form>
                    <button type='submit'>SUbmit</button>


                </div>
            </main>
        </div>
    )
}

export default Form