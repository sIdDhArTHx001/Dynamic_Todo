import axios from "axios";
import { createContext, useState } from "react";

export const Context = createContext()

const Supplyer = (props) => {
    const [allname, setAllName] = useState('Add User')
    const [user, setUser] = useState({
        id: '',
        name: '',
        userName: '',
        email: ''
    })
    const [Data,setData] = useState([])
    const fetchData = () => axios.get('https://6685062f56e7503d1ae20beb.mockapi.io/users/user')
    .then((data) => setData(data.data)  
)
const newUser = ()=>{
    axios.post('https://6685062f56e7503d1ae20beb.mockapi.io/users/user',user).then(()=> fetchData()
)
}

const updateSetUser= (id)=>{
    axios.get(`https://6685062f56e7503d1ae20beb.mockapi.io/users/user/${id}`)
    .then((data)=> setUser(data.data))
}

const setUpdateSetUser = (id)=>{
    axios.put(`https://6685062f56e7503d1ae20beb.mockapi.io/users/user/${id}`,user)
    .then(()=> fetchData())

}

const viewUser = (id)=>{
    axios.get(`https://6685062f56e7503d1ae20beb.mockapi.io/users/user/${id}`)
    .then((data)=>setUser(data.data))
}

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <Context.Provider value={{ viewUser,allname,setAllName,handleClose, handleShow, show, setShow, user, setUser, fetchData,newUser,Data,setData,updateSetUser,setUpdateSetUser }} >
            {props.children}
        </Context.Provider>
    )
}
export default Supplyer 