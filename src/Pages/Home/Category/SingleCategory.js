import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCategory = () => {
    const { first_car, second_car } = useLoaderData()
    console.log(first_car)
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

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
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

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleCategory;