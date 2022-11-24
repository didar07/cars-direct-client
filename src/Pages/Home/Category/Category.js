
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleCategory from './SingleCategory';

const Category = () => {
    const [categories, setCategories] = useState([])
    console.log(categories)
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2 className='text-center text-3xl font-bold'>categories of our collection</h2>
            <div className=' mt-5 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <Link to={`/categories/${categories[0]?._id}`}>
                    <button className='bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3 rounded-lg text-white font-semibold'>{categories[0]?.category_name}</button>
                </Link>
                <Link to={`/categories/${categories[1]?._id}`}>
                    <button className='bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3 rounded-lg text-white font-semibold'>{categories[1]?.category_name}</button>
                </Link>
                <Link to={`/categories/${categories[2]?._id}`}>
                    <button className='bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3 rounded-lg text-white font-semibold'>{categories[2]?.category_name}</button>
                </Link>
            </div>
            <div className='invisible'>
                {
                    <SingleCategory
                        key={categories._id}
                        categories={categories}
                    ></SingleCategory>
                }
            </div>
        </div>
    );
};

export default Category;