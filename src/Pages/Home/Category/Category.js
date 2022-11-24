
import React, { useEffect, useState } from 'react';

const Category = () => {
    const [categories, setCategories] = useState([])
    console.log(categories[0]?.category_name)
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2 className='text-center text-3xl font-bold'>categories of our collection</h2>
            <div className=' mt-5 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <button className='bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3 rounded-lg text-white font-semibold'>{categories[0]?.category_name}</button>
                <button className='bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3 rounded-lg text-white font-semibold'>{categories[1]?.category_name}</button>
                <button className='bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3 rounded-lg text-white font-semibold'>{categories[2]?.category_name}</button>
            </div>
        </div>
    );
};

export default Category;