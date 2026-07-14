import { useParams } from "react-router-dom";
import { useContext } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import { BookContext } from "../context/BookContext";

function BookDetails() {

    const { id } = useParams();

    const { books } = useContext(BookContext);

    const book = books.find(
        (b) => b.id === Number(id)
    );

    if (!book) {

        return <h2>Book Not Found</h2>;

    }

    return (

        <div className="home-layout">

            <Sidebar/>

            <div className="dashboard">

                <Navbar/>

                <div
                style={{
                    display:"flex",
                    gap:"40px",
                    marginTop:"40px",
                    background:"white",
                    padding:"30px",
                    borderRadius:"15px"
                }}
                >

                    <img
                    src={book.image}
                    alt={book.title}
                    style={{
                        width:"260px",
                        borderRadius:"15px"
                    }}
                    />

                    <div>

                        <h1>{book.title}</h1>

                        <h3>{book.author}</h3>

                        <p><b>Genre :</b> {book.genre}</p>

                        <p><b>Status :</b> {book.status}</p>

                        <p><b>Rating :</b> ⭐ {book.rating}</p>

                        <p
                        style={{
                            marginTop:"20px",
                            lineHeight:"1.8"
                        }}
                        >
                            {book.description}
                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default BookDetails;