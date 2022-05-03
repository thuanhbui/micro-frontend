import React, {useState, useEffect} from "react";
import "./homecontent.css"
import { getBooks, currency} from "./books";
import { addToCart, useLoggedIn} from "cart/cart";
import {Link} from "react-router-dom";

export default function HomeContent() {

    const loggedIn = useLoggedIn();

    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks().then(setBooks);
    })

    console.log(loggedIn)

    return (
        <div className="main-product-list">
            <div className="post-grid-container">
                {books.map((book) => (
                    <div key={book.id}>
                        <div className="img-container">
                            <img src={book.image} alt={book.name}/>
                        </div>
                        <div className="name">
                            <Link to={`/book/${book.id}`}>
                                <a>{book.name}</a>
                            </Link>
                        </div>
                        {loggedIn && (
                            <div>
                                <button onClick={() => addToCart(book.id)}>
                                    Add to Cart
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )

}