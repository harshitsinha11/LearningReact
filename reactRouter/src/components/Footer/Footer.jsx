import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='bg-white border-t absolute bottom-0 w-full'>
            <div className='mx-auto w-full max-w-screen-xl px-4 py-3 lg:py-5'>
                <div className='md:flex md:justify-between'>
                    <div className='mb-4 md:mb-0'>
                        <Link to="/" className="flex items-center">
                        <img src="data:image/jpeg;base64,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" 
                        className="mr-3 h-40 w-40" alt="logo" /></Link>
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-6'>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className='text-gray-500 font-medium'>
                                <li className="mb-4">
                                        <Link to="/" className="hover:underline">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about" className="hover:underline">
                                            About
                                        </Link>
                                    </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/harshitsinha11"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer">
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-2 border-gray-500 sm:mx-auto lg:my-4" />
                <div className="justify-center flex">
                    <span className="text-sm text-gray-600 sm:text-center">
                        © 2025
                        <a href="https://github.com/harshitsinha11" className="hover:underline">
                            harshitsinha
                        </a>
                        . All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer

