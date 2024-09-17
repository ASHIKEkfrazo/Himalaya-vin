import React from 'react'
import { Button, Input, Select, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate()


  const handleLogin = () => {
    navigate('/')
  }

  return (
    <div className='flex justify-center items-center h-screen bg-[#e3ffff] font-serif'>
      <div className="shadow-lg h-full max-h-[60%] w-full max-w-[500px] flex rounded-3xl  bg-white">
        {/* <div className="bg-login-bg bg-cover bg-no-repeat rounded-3xl  w-1/2 bg-right"></div> */}
        <div className="w-full h-full flex justify-center items-center ">
          <div className="w-3/4 h-full flex justify-center items-center flex-col gap-4">
            <img src="https://eimkeia.stripocdn.email/content/guids/CABINET_da6ee826f68eb108c924726d5460f5082d1a9899e8e50c985dc4e82f63bec700/images/image_1_1.png" alt="" className="object-cover" />            <div className="w-full">
              <label htmlFor="" className='fw-bolder'><span className='text-red-600 fw-bolder'>*</span>Enter Username</label>
              <Input
                placeholder='Enter Email/Username'
                style={{
                  padding: '1rem ',
                  marginTop: '0.5rem'

                }}
              />
            </div>
            <div className="w-full">
              <label htmlFor="" className='fw-bolder'><span className='text-red-600 '>*</span>Enter Password</label>
              <Input.Password
                placeholder='Enter Password'
                style={{
                  padding: '1rem',
                  marginTop: '0.5rem'
                }}
              />
              <label htmlFor="" className='text-red-600 fw-bolder text-sm text-end w-full cursor-pointer'>Forgot Password</label>
            </div>
            <div className='py-2 px-5 bg-theme-green text-white fw-bolder rounded-lg cursor-pointer' onClick={handleLogin}>Login</div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login