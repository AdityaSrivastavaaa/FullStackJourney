import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
  if(!user){
    return <h2>Please Login</h2>
  }else{
    return (<>
    <h2>Profile</h2>
    <p>Username: {user.username}</p>
    </>
    )
  }
}

export default Profile