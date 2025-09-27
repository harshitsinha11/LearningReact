import React, { useContext } from 'react'
import userContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(userContext)

    if(!user) return <h1 className='text-red-500'>NO PRESENT USER!!</h1>

    else return (
        <h2 className='text-amber-400'>Hello {user.username} !!</h2>
    )
}

export default Profile
