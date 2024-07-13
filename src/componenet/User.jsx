import React, { useContext, useEffect } from 'react'
import { FaEye } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { Context } from '../context/Supplyer';
import axios from 'axios';

const User = () => {

    const { fetchData, Data, handleShow,setAllName,updateSetUser,viewUser} = useContext(Context)
    useEffect(() => {
        fetchData();
    }, [])     

    const deleteUser = (id) => {
        {
            axios.delete('https://6685062f56e7503d1ae20beb.mockapi.io/users/user/' + id)
                .then(() => fetchData())
          
        }
    }

    const editUser = (id)=>{
        setAllName('Update User')
            handleShow()
          updateSetUser(id)
    }
   
    const showSingleUser = (id)=>{
        // console.log(id)
        setAllName('View User')
        viewUser(id)
        handleShow()
    }



    return (<>

        <div className='container-lg mt-5'>
            <table className="text-center table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='col-lg-12'><tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>

                    </tr>
                    </tbody>
                <tbody>
                    {
                        Data.map((data, index) => (<tr key={index}>
                            <th>{data.id}</th>
                            <th>{data.name}</th>
                            <th>{data.userName}</th>
                            <th>{data.email}</th>
                            <th>
                                <button onClick={()=> showSingleUser(data.id)} className='btn btn-outline-warning'><FaEye /></button>
                                <button onClick={()=> editUser(data.id)} className='btn btn-outline-success ms-1'><FaPencil /></button>
                                <button onClick={() => deleteUser(data.id)} className='btn btn-outline-danger ms-1'> <RiDeleteBin3Fill /> </button>
                            </th>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    </>)

}

export default User