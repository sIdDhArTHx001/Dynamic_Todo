import React, { useContext } from 'react'
import { IoMdAdd } from "react-icons/io";
import { Context } from '../context/Supplyer';
import { Link } from 'react-router-dom';
import Model from './Model';



const Nav = () => {
    const { handleShow, setUser ,setAllName} = useContext(Context)
    function both() {
        setAllName('Add User')
        handleShow()
        setUser('')
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <Link to={'/'} className="nav-link active" >User</Link>
                    </div>
                    <Model />
                </div>
                <button className='py-2 btn btn-primary fs-5' onClick={() => both()}><IoMdAdd /></button>
            </div>

        </nav>
    )
}

export default Nav