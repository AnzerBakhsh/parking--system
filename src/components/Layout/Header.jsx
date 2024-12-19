import { getAuth, signOut } from 'firebase/auth';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const logOut = async () => {
        const auth =  getAuth();
     signOut(auth).then((result) => {
            console.log({result})
          
          localStorage.clear()
          navigate("/login")
          console.log("User signed out successfully.");
         
          // Sign-out successful.
        }).catch((error) => {

          // An error happened.
        });
      
      }
    return (
        <header className="bg-blue-600 p-4 text-white shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-semibold">Parking System</div>
                <nav className="space-x-6">
                    <a href="/" className="hover:text-gray-300">Home</a>
                    <Link to="/exit-vehicle" className="hover:text-gray-300">Exit Vehicle</Link>
                    <Link to='/login' className="hover:text-gray-300" >Login/Signup</Link>
                    <div className=' flex cursor-pointer' onClick={logOut}>logout</div>
                </nav>
            </div>
        </header>
    )
}

export default Header
