
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate()

    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('https://cars-direct-server.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])


    const handleAddProduct = data => {
        console.log(data)
        const product = {
            name: data.name,
            price: data.price,
            condition: data.condition,
            description: data.description,
            location: data.location,
            mobilenumber: data.mobilenumber,
            yearsofuse: data.yearsofuse,
            category: data.category
        }
        fetch('https://cars-direct-server.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast.success(`${data.name} is added successfully`);
                navigate('/dashboard/myproducts')
            })
    }

    return (
        <div>
            <h2 className='text-3xl font-bold text-center mt-3'>Add A Product</h2>


            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Price</span></label>
                    <input type="text" {...register("price", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.price.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" {...register("location", {
                        required: "Location is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Condition</span></label>
                    <input type="text" {...register("condition", {
                        required: "condition is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Description</span></label>
                    <input type="text" {...register("description", {
                        required: "Description is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Years of Use</span></label>
                    <input type="text" {...register("yearsofuse", {
                        required: "Years of Use is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Category</span></label>
                    <select {...register("category", { required: "Category is Required" })} className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Select Your Category?</option>

                        <option>{category[0]?.category_name}</option>
                        <option>{category[1]?.category_name}</option>
                        <option>{category[2]?.category_name}</option>

                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Mobile number</span></label>
                    <input type="text" {...register("mobilenumber", {
                        required: "Mobile number is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-accent w-1/3 mt-4' value="Add Product" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;