import React from 'react'
import dis from "../assets/dis.jpg"
import {Link} from "react-router-dom"

const home = () => {
    return (
        <div className='bg-richblack-900 flex h-screen space-x-10 py-[140px] '>

            <div className='text-richblack-100 max-w-2xl ml-24'>
                <h3 className='font-bold text-3xl text-yellow-500'>Welcome to DigiRescue -</h3>
                <h3 className='font-bold text-3xl text-orange-600 '>Your Digital Lifeline in Emergencies</h3>

                <div className='mt-6 text-justify text-xl italic space-y-6'>
                    <p>In a world where disasters, both natural and man-made, can strike unexpectedly, having a reliable lifeline is paramount.
                        Introducing DigiRescue, your trusted companion during times of crisis.</p>

                    <p>DigiRescue is a cutting-edge application designed to revolutionize the way rescue agencies coordinate and respond to emergencies.
                        With the power of technology, we're bringing together the forces of compassion, expertise, and rapid response, all at your fingertips.</p>

                </div>
                
            </div>
            
            <div className=''>
                <Link to="/">
                    <img src={dis}  width={620}/>
                </Link>
            </div>

        </div>
    )
}

export default home