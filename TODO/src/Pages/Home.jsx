import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { setuser } from '../Slice/userSlice'


const Home = () => {
    const dispatch=useDispatch()
    const[formInput,setformInput]=useState(
        {
            name:'',
            age:'',
            email:'',
            contact:'',
        }
    )
    const handleChange=(event)=>{
        const{name,value}=event.target;
        setformInput((currInput)=>{
            return{
                ...currInput,
                [name]:value,
            }
        })
    }
    const addUser=(event)=>{
        event.preventDefault();
        dispatch(setuser(formInput))

    }
  return (
    <div>
            <label>Name:</label>
            <br/>
            <input  name="name" type="text" value={formInput.name} onChange={handleChange}/>
            <br/>
            <label>Age:</label>
            <br/>
            <input name="age"  type="number" value={formInput.age} onChange={handleChange}/>
            <br/>
            <label>Email:</label>
            <br/>
            <input  name="email" type="text" value={formInput.email} onChange={handleChange}/>
            <br/>
            <label>Contact:</label>
            <br/>
            <input name="contact"  type="number" value={formInput.contact} onChange={handleChange}/>
            <br/>
            <button onClick={addUser}>Sumbit</button>
           
    </div>
  )
}

export default Home