import React, { useEffect, useState } from "react";
import axios from "axios";
// import Spinner from '../components/Spinner'
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BackButton from "../components/backButton";
import Spinner from "../components/spinner";
import BooksTable from "../components/home/booksTable";
import { BooksCard } from "../components/home/booksCard";
// import EditIcon from '@mui/icons-material/Edit';

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showType, setshowType] = useState("table");
  
  useEffect(() => {
    axios
      .get("http://localhost:5555/books")
      .then((res) => {
        // console.log(res.data);
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="w-full min-h-[100vh] flex justify-center text-white bg-black">
      <div className="w-full">
      <div className="flex justify-between items-center p-3">
        <h1 className="text-gray-300 font-bold text-xl">List of Books</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-4xl text-gray-400" title="Add book to store"/>
        </Link>
      </div>
      <div className="justify-center space-x-6 align-middle flex mb-3">
          <button className="bg-yellow-500 py-2 px-4 rounded-lg text-white font-semibold" onClick={()=>setshowType('table')} title="View contents as Table">Table</button>
          <button className="bg-yellow-500 py-2 px-4 rounded-lg text-white font-semibold" onClick={()=>setshowType('card')} title="View contents as Cards">Card</button>
      </div>
      {loading ? (
        <Spinner/>
      ) : (
          showType==="table" ? <BooksTable books={books} /> : <BooksCard books={books}/> 
      )}
      </div>
    </div>
  );
}