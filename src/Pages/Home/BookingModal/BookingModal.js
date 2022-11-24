import React from 'react';

const BookingModal = ({ booking }) => {
    console.log(booking)
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{booking.name}</h3>
                    <form className='grid grid-cols-1 gap-3'>
                        <input type="text" disabled value={booking.name} className="input input-bordered w-full" />
                        <input type="text" disabled value={booking.resale_price} className="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <input type="number" placeholder="your mobile number" className="input input-bordered w-full" />
                        <input type="text" placeholder="your location" className="input input-bordered w-full" />
                        <br />
                        <input type="submit" className='btn btn-outline btn-primary w-full' value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;