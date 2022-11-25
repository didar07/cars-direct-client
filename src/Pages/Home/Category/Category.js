import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';


const Category = () => {
    // const [categories, setCategories] = useState([])
    // console.log(categories)


    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories')
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch('http://localhost:5000/categories')
    //         .then(res => res.json())
    //         .then(data => setCategories(data))
    // }, [])
    return (
        <div>
            <h2 className='text-center text-3xl font-bold'>categories of our collection</h2>
            <div className=' mt-5 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <button className='bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3 rounded-lg text-white font-semibold'>  <Link to={`/categories/${categories[0]?._id}`}>{categories[0]?.category_name}</Link>
                </button>

                <button className='bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3 rounded-lg text-white font-semibold'>
                    <Link to={`/categories/${categories[1]?._id}`}>{categories[1]?.category_name}</Link>
                </button>
                <button className='bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3 rounded-lg text-white font-semibold'>
                    <Link to={`/categories/${categories[2]?._id}`}>
                        {categories[2]?.category_name}
                    </Link>
                </button>
            </div>

        </div >
    );
};

export default Category;