import React from 'react';

const Banner = () => {
    return (
        <div className="hero bg-slate-200 rounded-lg shadow-lg p-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src='https://img.freepik.com/free-photo/blue-jeep-parking-public-zone_114579-4042.jpg?w=996&t=st=1669221278~exp=1669221878~hmac=db352c51de70301016718f88687e3c9d86c3f98e1314a23ad6bb8df3697ed0a7' className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your Dream Car Just One Click Away!</h1>
                    <p className="py-6">Schedule a test drive from the wide range of our car collection</p>

                </div>
            </div>
        </div>
    );
};

export default Banner;