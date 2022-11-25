import { format } from 'date-fns';
import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';

const SingleCategory = () => {
    const { first_car, second_car } = useLoaderData()
    // console.log(first_car)

    const date = new Date()
    const newDate = format(date, 'PP')
    const [booking, setBooking] = useState([])
    // console.log(booking)
    return (
        <div className='lg:grid grid-cols-2 gap-7'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={first_car.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Car Title:{first_car.name}</h2>
                    <p>Location: {first_car.location}</p>
                    <p>Original Price: ${first_car.original_price}</p>
                    <p>Resale Price: ${first_car.resale_price}</p>
                    <p>Seller Name: {first_car.seller_name}</p>
                    <p>Years of Use: {first_car.years_of_use}</p>
                    <p>Posted Time :{JSON.stringify(newDate)}</p>
                    <div className="card-actions justify-end">

                        <label onClick={() => setBooking(first_car)} htmlFor="booking-modal" className="btn btn-primary">Buy Now</label>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={second_car.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Car Title:{second_car.name}</h2>
                    <p>Location: {second_car.location}</p>
                    <p>Original Price: ${second_car.original_price}</p>
                    <p>Resale Price: ${second_car.resale_price}</p>
                    <p>Seller Name: {second_car.seller_name}</p>
                    <p>Years of Use: {first_car.years_of_use}</p>
                    <p>Posted Time :{JSON.stringify(newDate)}</p>
                    <div className="card-actions justify-end">

                        <label onClick={() => setBooking(second_car)} htmlFor="booking-modal" className="btn btn-primary">Buy Now</label>
                    </div>
                </div>
            </div>
            <BookingModal booking={booking} setBooking={setBooking}></BookingModal>
        </div>
    );
};

export default SingleCategory;