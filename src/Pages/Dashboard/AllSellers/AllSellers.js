import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const AllSellers = () => {

    const [deletingSeller, setDeletingSeller] = useState(null)

    const closeModal = () => {
        setDeletingSeller(null);
    }

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers');
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successful.')
                    refetch();
                }
            })
    }

    const handleDeleteSeller = seller => {
        console.log(seller)

        fetch(`http://localhost:5000/sellers/${seller._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Seller deleted successfully`)
                }
            })

    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-3xl text-center font-bold'>All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Seller Info</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller?.role !== 'admin' && <button onClick={() => handleMakeAdmin(seller._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                                <td>{seller.choose}</td>
                                <td>
                                    <label onClick={() => setDeletingSeller(seller)} htmlFor="confirmation-modal" className="btn btn-xs btn-danger">Delete</label>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingSeller && <ConfirmationModal
                    title={`Are You sure you want to delete this seller?`}
                    message={`If you delete the seller it cannot be undone`}
                    closeModal={closeModal}
                    successAction={handleDeleteSeller}
                    modalData={deletingSeller}
                ></ConfirmationModal>
            }

        </div>
    );
};

export default AllSellers;