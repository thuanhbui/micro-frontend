import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import { getBookById, currency } from "home/books";
import placeAddToCart from "addtocart/placeAddToCart";
import "./bookdetail.css"

export default function BookDetail() {

    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        if (id) {
            getBookById(id).then(setBook);
        } else {
            setBook(null);
        }
    }, [id]);

    const addToCart = useRef(null);

    useEffect(() => {
        if (addToCart.current) {
            placeAddToCart(addToCart.current, book.id);
        }
    }, [book]);

    if (!book) return null;

    return (
        <div className="book-container">
            <div className="book-image">
                <img src={book.image} alt={book.name} />
            </div>
            <div className="detail">
                <div>
                    <h1>{book.name}</h1>
                    <div>
                        {currency.format(book.price)}
                    </div>
                </div>
                <div className="atc" ref={addToCart}></div>
                <div className="description">
                    <div>{book.description}</div>
                    <div>{book.longDescription}</div>
                </div>
            </div>
        </div>
    );
}
