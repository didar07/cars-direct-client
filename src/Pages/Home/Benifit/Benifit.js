import React from 'react';

const Benifit = () => {
    return (
        <div className='bg-gray-50 rounded-lg shadow-xl p-7 mt-7'>
            <div className='mb-5'>
                <h1 className='text-3xl font-bold'>What is Assured cars?</h1>
                <p className='font-semibold'>You focus on choosing the car we take care of everything else</p>
            </div>

            <div className='flex justify-evenly gap-5'>
                <div className='bg-gray-200 rounded-lg shadow-xl p-6'>
                    <img src="https://static.vecteezy.com/system/resources/previews/000/564/515/original/car-icon-vector.jpg" className='w-20' alt="" />
                    <h2 className='font-bold text-2xl'>220+ Points Inspection</h2>
                    <p className='font-semibold'>We make sure each part of the car is inspected properly so you get the best car</p>
                </div>
                <div className='bg-gray-200 rounded-lg shadow-xl p-6'>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.vWqV36U7__hVmrndVqjhmQHaHa&pid=Api&P=0" className='w-20' alt="" />
                    <h2 className='font-bold text-2xl'>Car as good as new</h2>
                    <p className='font-semibold'>If there is any fault, dent or scratch in car we make sure to fix it and deliver it to you.</p>
                </div>
                <div className='bg-gray-200 rounded-lg shadow-xl p-6'>
                    <img src="https://tse1.mm.bing.net/th?id=OIP.cb-M6tJ2cJUMI9EFTIQq-AHaHa&pid=Api&P=0" className='w-20' alt="" />
                    <h2 className='font-bold text-2xl'>7 Days Money Back</h2>
                    <p className='font-semibold'>If you dont like the car, we guarantee you get back your money, post buying the car.</p>
                </div>
                <div className='bg-gray-200 rounded-lg shadow-xl p-6'>
                    <img src="https://tse1.mm.bing.net/th?id=OIP.gaCWQ39wYNYcNorpQxbSaQHaIr&pid=Api&P=0" className='w-20' alt="" />
                    <h2 className='font-bold text-2xl'>6 Months Warranty</h2>
                    <p className='font-semibold'>We offer you comprehensive warranty to make your life peaceful.</p>
                </div>

            </div>
        </div>
    );
};

export default Benifit;