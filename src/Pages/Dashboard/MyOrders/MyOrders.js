import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext)

    const url = `https://cars-direct-server.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h2 className='text-3xl text-center font-bold'>My Orders</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Booking Name</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.length > 0 &&
                            bookings.map((booking, i) => <tr key={booking._id} className='hover'>
                                <th>{i + 1}</th>
                                <th>{booking.name}</th>
                                <th>{booking.bookingName}</th>
                                <th>$ {booking.resalePrice}</th>
                                <th>{booking.location}</th>
                                <th>{
                                    !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button className='btn btn-info'>Pay</button></Link>
                                }
                                    {booking.paid && <span className='text-success'>Paid</span>}
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;