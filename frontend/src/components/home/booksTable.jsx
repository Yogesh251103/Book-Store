import React from "react";
import { Link } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import {AiOutlineEdit} from "react-icons/ai"
import {BsTrash} from "react-icons/bs"

const BooksTable = ({books}) => {
  console.log(books);
  return (
    <table className="w-full border-separate border-spacing-2 px-3">
      <thead>
        <tr>
          <th className="border border-yellow-500 rounded-md p-2 text-gray-300">No</th>
          <th className="border border-yellow-500  rounded-md text-gray-300">Title</th>
          <th className="border border-yellow-500 rounded-md text-gray-300">Author</th>
          <th className="border border-yellow-500 rounded-md text-gray-300">Published Year</th>
          <th className="border border-yellow-500 rounded-md text-gray-300">Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id}>
            <td className="border border-yellow-500 rounded text-center">
              {index + 1}
            </td>
            <td className="border border-yellow-500 rounded text-center">
              {book.title}
            </td>
            <td className="border border-yellow-500 rounded text-center">
              {book.author}
            </td>
            <td className="border border-yellow-500 rounded text-center">
              {book.publishYear}
            </td>
            <td className="border border-yellow-500 rounded text-center py-3">
              <div className="flex flex-row space-x-3 items-center justify-between px-3">
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="w-5 h-5" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="w-5 h-5"/>
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                <BsTrash className="w-5 h-5"/>
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
