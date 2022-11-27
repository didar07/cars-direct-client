import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashBoardLayout = () => {

    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)

    const [sellers, setSellers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/sellers')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSellers(data)
            })
    }, [])



    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>

                <div className="drawer-side">

                    <div className='invisible'>
                        {
                            sellers.map(seller => <p key={seller._id}>{seller.choose}</p>)
                        }
                    </div>
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to='/dashboard'>My Orders</Link></li>

                        {!isAdmin &&
                            <li><Link to='/dashboard/addproduct'>Add A Product</Link></li>
                        }

                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/allusers'>All Users</Link></li>
                                <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                            </>
                        }

                    </ul>

                </div>


            </div>
        </div>
    );
};

export default DashBoardLayout;