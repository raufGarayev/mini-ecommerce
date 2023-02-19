import React from 'react';

import {useGetAllProductsQuery} from "../features/productsApi";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addToCart} from "../features/cartSlice";

const Home = () => {
    const {data, error, isLoading} = useGetAllProductsQuery()
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        navigate("/cart")
    }

    return (
        <div className={"home-container"}>
            {
                isLoading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>An error occured</p>
                ) : (
                    <>
                        <h2>New Arrivals</h2>
                        <div className={"products"}>
                            {data?.map(p => <div key={p.id} className={"product"}>
                                <h3>{p.name}</h3>
                                <img src={p.image} alt={p.name}/>
                                <div className={"details"}>
                                    <span>{p.desc}</span>
                                    <span className={"price"}>{p.price}$</span>
                                </div>
                                <button onClick={() => handleAddToCart(p)}>Add to Card</button>
                            </div>)}
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default Home;