import React,{useState} from 'react'
import ButtonAppBar from './Navbar'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addPeople } from '../store/registrationSlice';


function Registration() {
    const dispatch=useDispatch()
    const [inputstate,setinputstate]=useState({FirstName:'',LastName:'',Phonenumber:''})
  const handleChange=(e)=>{
    setinputstate({...inputstate,[e.target.name]:e.target.value})
  }
  const handleClick=(e)=>{
    console.log(inputstate,"inputstateinputstateinputstate")
    dispatch(addPeople(inputstate))
    setinputstate({FirstName:'',LastName:'',Phonenumber:''})
    console.log(inputstate,"inppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp")
  }
  return (
    <div>
   <ButtonAppBar/>
   <h1> Registration</h1>
   <div style={{marginLeft:"523px"}}>
   <TextField label="FirstName" variant="outlined" type="text" name='FirstName' value={inputstate.FirstName} onChange={handleChange}/><br/><br/>
   <TextField label="LastName" variant="outlined" type="text" name='LastName' value={inputstate.LastName}  onChange={handleChange}/><br/><br/>
   <TextField  label="Phonenumber" variant="outlined" type="text" name='Phonenumber' value={inputstate.Phonenumber}  onChange={handleChange}/><br/><br/>
   <Button onClick={handleClick}>Registration</Button>
   </div>
    </div>
  )
}

export default Registration