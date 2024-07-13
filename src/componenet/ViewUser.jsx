import React, { useContext, useEffect } from 'react'
import { Context } from '../context/Supplyer'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewUser = () => {
    const {user,setUser,handleClose} = useContext(Context)

    const {id} = useParams();
   
    const viewData = async ()=>{
            let data = await axios.get('https://6685062f56e7503d1ae20beb.mockapi.io/users/user/' + id)
           setUser(data.data)
         
        }
       
    useEffect(() => {  
        viewData() 
        handleClose()  
    },[id,handleClose])
   
    
    return (
        <>

            <div className="container-sm m-5">
                <div className="form-floating mb-3">
                    <input type="text"  className='form-control text-center fs-3' value={user.id || ''} placeholder='Your Id' readOnly/>
                    <label htmlFor="floatingInput">Id</label>
                </div>
                <div className="form-floating mb-3"> 
                    <input type="text"  className='form-control text-center fs-3' value={user.name || ''} placeholder='Your Name' readOnly/>
                    <label htmlFor="floatingInput">Name</label>
                </div>
                <div className='form-floating mb-3'>
                    <input type="text" className='form-control text-center fs-3' value={user.userName || ''} placeholder='Your UserName' readOnly/>
                    <label htmlFor="floatingInput">UserName</label>
                </div>
                <div className="form-floating">
                    <input type="email" value={user.email || ''} placeholder='Your Email' className='form-control text-center fs-3' readOnly/>
                    <label htmlFor="floatingInput"> Email</label>
                </div>

            </div>

        </>
    )
}

export default ViewUser