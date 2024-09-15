import React from 'react'
import Logo from './Logo'

function Footer() {
    return (
        <div>
            <div className='w-full flex justify-around items-center'>
                <div>
                    <Logo width='25vw' />
                </div>
                <div>
                    <h1 className='font-fascinate text-[5vw] text-[#7DD956] '>Get in touch</h1>
                <p className=' font-nerko text-[2vw] text-white' >+91 7394039730</p>
                <p className=' font-nerko text-[2vw] text-white' >info@pixstrive.com</p>
                </div>
            </div>
            <div className=' flex justify-evenly text-[1.4vw] px-[2vw]'>
                    <p className=' hover:text-white cursor-pointer font-nerko text-[#7DD956]' >© 2024 Welcome. All right reserved.</p>
                    <p className=' hover:text-white cursor-pointer font-nerko text-[#7DD956]'>Privacy Policy</p>
                    <p className=' hover:text-white cursor-pointer font-nerko text-[#7DD956]'>Terms and Conditions</p>
                </div>
        </div>
    )
}

export default Footer
