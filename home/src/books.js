const API_SERVER = "http://localhost:8080";

export const getBooks = () => {
    return fetch(`${API_SERVER}/books`).then((res) => res.json())
}

export const getBookById = (id) => {
    return fetch(`${API_SERVER}/books/${id}`).then((res) => res.json())
}

export const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});