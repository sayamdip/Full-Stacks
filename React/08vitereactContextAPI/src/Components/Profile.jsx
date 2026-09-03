import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (user == null){
        return <div className='text-white text-center'>Please Login</div>
    }
    return <div className='text-white text-center'>Welcome {user.username}</div>
}

export default Profile