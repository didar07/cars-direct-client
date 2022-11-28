import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ booking, setBooking }) => {

    const { user } = useContext(AuthContext)

    const handleBookng = event => {
        event.preventDefault()
        const form = event.target
        const bookingName = form.bookingName.value
        const resalePrice = form.resalePrice.value
        const phone = form.phone.value
        const name = form.name.value
        const email = form.email.value
        const location = form.location.value
        console.log(bookingName, resalePrice, phone, location, name, email)

        const bookingInfo = {
            bookingName,
            resalePrice,
            phone,
            name,
            email,
            location
        }
        // console.log(bookingInfo)

        fetch('https://cars-direct-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setBooking([])
                    toast.success('Booking Confirmed')
                }
            })

    }

    // console.log(booking)
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{booking?.name}</h3>
                    <form onSubmit={handleBookng} className='grid grid-cols-1 gap-3'>
                        <input name='bookingName' type="text" disabled value={booking.name} className="input input-bordered w-full" />

                        <input name='resalePrice' type="text" disabled value={booking.resale_price} className="input input-bordered w-full" />

                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="your name" className="input input-bordered w-full" />

                        <input name='email' type="text" defaultValue={user?.email} disabled placeholder="your email" className="input input-bordered w-full" />

                        <input name='phone' type="number" placeholder="your mobile number" className="input input-bordered w-full" />

                        <input name='location' type="text" placeholder="your location" className="input input-bordered w-full" />
                        <br />
                        <input type="submit" className='btn btn-outline btn-primary w-full' value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;