import React from 'react'
import {Link} from "react-router-dom"
import "../App.css"

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className='flex space-x-96 bg-richblack-900 ' id='navbar'>
            <div className='ml-24'>
                <h1 className=' text-3xl font-bold text-richblack-100' >DigiRescue</h1>
            </div>
            
            <nav>
                <ul className='flex gap-8  font-bold text-lg text-richblack-100'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Services</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className='flex m5-3 mr-5 text-lg gap-6'>
                { !isLoggedIn &&
                    <Link to="/login">
                        <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                            Login
                        </button>
                    </Link>
                }
                {   !isLoggedIn &&
                    <Link to="/signUp">
                        <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                            Sign Up
                        </button>
                    </Link>
                }
                {   isLoggedIn &&
                    <Link to="/logout">
                        <button>
                            Log Out
                        </button>
                    </Link>
                }
                {   isLoggedIn &&
                    <Link to="/dashboard">
                        <button>
                            Dashboard
                        </button>
                    </Link>
                }
            </div>

        </div>
    )
}

export default Navbar