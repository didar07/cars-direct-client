import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center'>
            <h2 className='text-3xl text-red-600 font-bold'>Oppssss!!! 404 Not Found</h2>
            <img src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=996&t=st=1669227439~exp=1669228039~hmac=4e2bf54344fb445e5cd14410b5c14420446a83939321078a99b806a85b2f0c14" className='mx-auto w-2/3 h-2/3' alt="" />
            <Link to='/' className='bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3 rounded-lg text-white font-semibold shadow-lg'>Back to Home page</Link>
        </div>
    );
};

export default Error;