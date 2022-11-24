import React from 'react';
import Banner from '../Banner/Banner';
import Benifit from '../Benifit/Benifit';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Benifit></Benifit>
            <Category></Category>
        </div>
    );
};

export default Home;