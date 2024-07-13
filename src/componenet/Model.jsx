import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { Context } from '../context/Supplyer';

const Model = () => {
    const { show, handleClose, user, setUser, newUser, viewUser, allname ,setUpdateSetUser} = useContext(Context);
    const inputValue = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const { id, name, email, userName } = user;
    const handleSubmit = () => {
        if(allname === 'Add User'){
         name && email && userName
            newUser()
        }
        else 
        setUpdateSetUser(id)
    if(allname === 'View User')
        viewUser()

    handleClose()
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>{allname}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="form-floating mb-3">
                            <input type="text" className='form-control' value={name} onChange={inputValue} name="name" placeholder='Your Name' />
                            <label htmlFor="floatingInput">Name</label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input type="text" className='form-control' value={userName} onChange={inputValue} name="userName" placeholder='Your UserName' />
                            <label htmlFor="floatingInput">UserName</label>
                        </div>
                        <div className="form-floating">
                            <input type="email" name="email" value={email} onChange={inputValue} placeholder='Your Email' className='form-control' />
                            <label htmlFor="floatingInput"> Email</label>
                        </div>

                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button  variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );


}

export default Model