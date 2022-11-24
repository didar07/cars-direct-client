import React from 'react';

const BookingModal = ({ booking, setBooking }) => {

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
        console.log(bookingInfo)
        setBooking({})
    }

    console.log(booking)
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
                        <input name='name' type="text" placeholder="your name" className="input input-bordered w-full" />
                        <input name='email' type="text" placeholder="your email" className="input input-bordered w-full" />
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