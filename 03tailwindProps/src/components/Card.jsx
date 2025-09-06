import React from 'react'

function Card({username = "dev.harshit"}) {
    return (
        <h1 className='bg-green-400 text-black p-4 rounded-xl'>{username}</h1>
    )
}

export default Card
