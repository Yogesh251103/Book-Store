import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../components/spinner";
import BackButton from "../components/backButton";

export default function ShowBook() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  console.log(book)
  return (
    <>
    <div className="w-full min-h-[100vh] bg-black  justify-center text-white p-3">
      <h1 className="font-bold text-gray-300 text-3xl text-center m-auto">Book Details</h1>
      {loading ? (
        <Spinner />
      ):(
        <div className="block">
        <div className="w-full h-[100%] flex justify-center items-center">
        <div className="border-2 border-yellow-500 mt-5 w-fit p-4 rounded-xl space-y-3">
          <div>
            <span className="font-bold">Title: </span>
            {book.title}
          </div>
          <div>
            <span className="font-bold">Author: </span>
            {book.author}
          </div>
          <div>
            <span className="font-bold">Published Year: </span>
            {book.publishYear}
          </div>
        </div>
        </div>
        </div>
      )
      }
    </div>
    </>
  );
}
