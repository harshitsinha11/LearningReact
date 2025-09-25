import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Header() {
    return (
        <div className='shadow sticky z-20 top-0'>
            <nav className='bg-white px-4 lg:px-6 py-2.5 border-gray-200'>
                <div className='flex flex-wrap justify-between items-center mx-auto '>
                    <div className='flex'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb39/eCgoKQkJCxsbH29vZiYmI4ODh0dHTX19empqbFxcXr6+sQEBDh4eEbGxu7u7s0NDR6enpXV1egoKDJyclvb28ODg6IiIhcXFwfHx8ZGRnwNjATAAACZUlEQVR4nO3dCW7CMBCFYRdIw75vbSm9/y2rqKgUVRo72NJoxv93gveUkGBj7BAAAAAAAAAAAAAAAAAAoAKrdjq0Y9qu+tVbH1/sOa7TC7baYZ/UJvZrZtpJnzZrkgputHNm2KRUPGinzHKIF3zVzpjpNVZwq50w2zbScKodMNtULjjRzlfARGw41o5XwFhsONeOV8BcbGj3ZX83Extqpyui8oY77XQFXMWGJ+14BZzEhlbHTX/JY6iBdrwCFmJDD48auWBYaufLtow0NP803cUKhoV2xEyRT6H9+zR6j3bO2ikznFMKhrDSzvm05GnhxuYgap40l3izHlmbcpuNekx53y7kdmDHts/lAwAAAAAAAAAAxjRvy5Edy7e+P1zsh9q/JfU23PfoN7hqx33KdZBa0O5i9ugy9h+f2jkzfKYUfNdOmeU9XtD6Sm95lXfwsFhfXqofwkU7YLZLpKF2vgLkgnYXC93Jy4bsvgrv5JeivS9r/w3Fhh/a8QrYiA210xVR+TX0/zn0/yz1/z708KiRC1bwvdT+2CI6JeV+fFjBGL+CeRrLT5vEubYK5kuD/znvjvffLQAAAAAAAAAAgCHO94myt9fXoddeXxOj+7XFFkD/srtsKHHPPff7Jrrf+9L//qVf2hEzRfegtX2PdmL3qXa+AuSC/vfz9r8nu/999a3v5t2Rn6ba6YqovKH/c2ZsDpseyWcFWV/l3ZFXettfqh/9I7D7c9cqODvP/H+7EhazW5tke5RwhmVoLI+Bk84h9X+WbLA7hko9DzhUcKZzx/m53AAAAAAAAAAAAAAAAABg0zfn21Nf0tdOJAAAAABJRU5ErkJggg==" 
                        alt="burger"
                        className='mr-5 h-12 ' />
                        <Link to="/" className="flex items-center">
                        <img src="data:image/jpeg;base64,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" 
                        className='mr-1 h-12'
                        alt="Logo" /></Link>
                    </div>
                    <div className='flex items-center lg:order-2'>
                        <Link to="#"
                        className='text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'
                        >Log in</Link>
                        <Link to="#"
                        className='text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'
                        >Get Started</Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/user/0"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    User
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header