import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-600 p-4 text-white shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-semibold">Parking System</div>
                <nav className="space-x-6">
                    <a href="/" className="hover:text-gray-300">Home</a>
                    <Link to="/exit-vehicle" className="hover:text-gray-300">Exit Vehicle</Link>
                    <Link to='/login' className="hover:text-gray-300">Login/Signup</Link>
                   
                </nav>
            </div>
        </header>
    )
}

export default Header
