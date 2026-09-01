import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/sayamdip")
        .then(response=> response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, [])
    return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Public Repositories: {data.public_repos}
    <img src={data.avatar_url} alt="Profile Picture" />
    </div>
    
    
    )
}
