import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center'>
            <h2 className='text-5xl text-red-600 font-bold mt-5'>Oppssss!!! 404 Not Found</h2>
            <img src="https://tse1.mm.bing.net/th?id=OIP.yYBFzWZ0R970KK2bJhwO9AHaEi&pid=Api&P=0" className='mx-auto w-2/3 h-1/3' alt="" />
            <Link to='/' className='mt-5 bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3 rounded-lg text-white font-semibold'>Back to Home page</Link>
        </div>
    );
};

export default Error;