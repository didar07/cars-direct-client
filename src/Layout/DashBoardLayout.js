import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSellers from '../hooks/useSellers';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashBoardLayout = () => {

    const { user } = useContext(AuthContext)
    const [isSellers] = useSellers(user?.email)
    const [isAdmin] = useAdmin(user?.email)



    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>

                <div className="drawer-side">


                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        {!isSellers & !isAdmin &&
                            <li><Link to='/dashboard'>My Orders</Link></li>}

                        {isSellers &&
                            <>
                                <li><Link to='/dashboard/addproduct'>Add A Product</Link></li>
                                <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                            </>
                        }

                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/allusers'>All Buyers</Link></li>
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