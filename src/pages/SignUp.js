import React from 'react'
import {Link} from "react-router-dom"
import {useState} from 'react'
import UserForm from '../Components/UserForm'
import AgencyForm from '../Components/AgencyForm'

const SignUp = () => {

    const [accountType, setAccountType] = useState("user");

    return (
        <div className='bg-richblack-900 h-screen flex item-center justify-center pt-10 '>
            <div className='text-richblack-100'>

                <div className='flex bg-richblack-800 overflow-y-hidden p-1 gap-x-1 my-6 ml-24 rounded-full max-w-max'>
                    <button className={`${accountType === "user" ? "bg-richblack-900 text-richblack-5"
                    :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("user")}>
                        User
                    </button>

                    <button className={`${accountType === "agency" ? "bg-richblack-900 text-richblack-5"
                    :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("agency")}>
                        Agency
                    </button>
                </div>

            <form  className="flex max-w-sm flex-col gap-y-4 border-3">
            {accountType === "user" ? (
            <div>
              <UserForm />
            </div>
          ) : (
            <div>
              <AgencyForm />
            </div>
          )}
            
            </form>
         </div>
       </div>
    )
}

export default SignUp