import React, { useContext, useState } from 'react';
import { myContext } from '../App';
import '../App.css'


const Cart = () => {
    // importing context
    let { data, setData } = useContext(myContext);

    return (
        // creating functions
        <div className="container">
            {data.map((e, i) => {
                const discountPrice = Math.round(
                    e.price * (e.discountPercentage / 100)
                );
                const [quantity, setQuantity] = useState(1);

                const addQuantity = () => {
                    setQuantity(quantity + 1);
                };

                const removeQuantity = () => {
                    if (quantity > 1) {
                        setQuantity(quantity - 1);
                    }

                    setData(data);
                };
                const removeButton = () => {
                    setData((prevProducts) =>
                        prevProducts.map((item) =>
                            item === e ? { ...item, quantity: 0 } : item
                        )
                    );
                    setQuantity(0);
                };

                return (
                    // creating the card & it's details
                    <div
                        key={i}
                        className="card mb-5 bg-light text-dark"
                        style={{ minWidth: "100%", maxWidth: "300px" }}
                    >
                        <div className="row g-0">
                            <div className="col-md-3">
                                <img
                                    src={e.image}
                                    className="img-fluid p-4 cardImage"
                                    alt={e.alt}
                                />
                            </div>
                            <div className="col-md-9">
                                <div className="card-body px-3">
                                    <div className="top">
                                        <div className="top-header d-flex justify-content-between align-items-center">
                                            <h5 className="card-title">{e.title}</h5>
                                            <div className="d-flex align-items-center justify-content-end qp-area">
                                                <div className="d-flex align-items-center">
                                                    <button
                                                        type="button"
                                                        className="btn btn-minus"
                                                        style={{ marginRight: "8px" }}
                                                        onClick={() => {
                                                            removeQuantity();
                                                        }}
                                                    >
                                                        {" "}
                                                        -{" "}
                                                    </button>
                                                    <div className="py-1 quantityText">{quantity}</div>
                                                    <button
                                                        type="button"
                                                        className="btn btn-plus"
                                                        style={{ marginLeft: "8px", marginRight: "8px" }}
                                                        onClick={() => {
                                                            addQuantity();
                                                        }}
                                                    >
                                                        {" "}
                                                        +{" "}
                                                    </button>
                                                </div>
                                                <h4 className="card-title-2" style={{ marginLeft: "8px" }}>${e.price}</h4>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p className="card-text-brand">
                                                <b>Brand : </b>
                                                {e.brand}
                                            </p>
                                        </div>

                                        <b>Description : </b>
                                        <p className="card-text-description">●{e.description}</p>
                                        <div className="card-text"><b> In Stock : </b>&nbsp;
                                            <p className="card-text text-success" style={{ display: "inline" }}>
                                                <b>{e.stock}</b>
                                            </p>
                                        </div>
                                        <br />
                                        <p className="card-text">
                                            <b>Rating:</b> {e.rating}
                                        </p>


                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="card-text"><b>Discount Offer : </b>&nbsp;
                                                <p className="card-text text-success" style={{ display: "inline" }}>
                                                    <b>{e.discountPercentage}%</b>
                                                </p>
                                            </div>
                                            <div className="d-flex flex-row justify-content-between align-items-center">
                                                <button
                                                    type="button"
                                                    className="btn btn-remove"
                                                    style={{ marginRight: "20px" }}
                                                    onClick={() => {
                                                        removeButton();
                                                    }}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="bottom">
                                        <div className="d-flex justify-content-between align-items-center">
                                            Original Price (1 item) :{" "}
                                            <p className="card-text"><b>${e.price}</b></p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            Discount Amount :{" "}
                                            <p className="card-text text-success">
                                                {" "}
                                                <b> - ${discountPrice}</b>
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            Final Price :{" "}
                                            <p className="card-text"><b>${e.price - discountPrice}</b></p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            Total Amount :{" "}
                                            <h5 className="card-text">${(e.price - discountPrice) * quantity}</h5>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary my-3 float-end"
                                    >
                                        Pay now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Cart;