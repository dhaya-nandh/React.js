import React from 'react'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteuser } from '../Slice/userSlice'


const User = () => {
    const userIn=useSelector((state)=>state.userInfo.users)
    const dispatch=useDispatch()
    const deleteInfo=(index)=>{dispatch(deleteuser(index))
        
    }
  return (
    <div>
       {
userIn?.map((user,index)=>{
    return(
        <table >
       <div key={index}>
        <p>{user.name}</p>
        <p>{user.age}</p>
        <p>{user.email}</p>
        <p>{user.contact}</p>
        <button onClick={()=>deleteInfo(index)}>delete</button>
        </div>
        </table>
        
    )
    })
   
       }
            
    
    </div>
  )
}

export default User