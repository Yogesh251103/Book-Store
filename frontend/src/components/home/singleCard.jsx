import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import {BsTrash} from "react-icons/bs"
import {PiBookOpenTextLight} from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import BookModal from './bookModal';

const SingleCard = ({book}) => {
   const [showModal,setShowModal] = useState(false);
  return (
    <div key={book._id} className='border-2 border-yellow-500 p-4 relative rounded-md hover:shadow-lg h-auto ml-5'>
      <div className='flex justify-between'>
           <h4 className='text-yellow-500'>{book._id}</h4>
           <h4 className=' bg-yellow-500 py-1 px-3 rounded-lg font-semibold'>{book.publishYear}</h4>
      </div>
           <div className='flex items-center gap-x-2'>
           <PiBookOpenTextLight className="text-2xl text-yellow-500"/>
           <h3 className='my-2'>{book.title}</h3>
           </div>
           <div className='flex items-center gap-x-2'>
            <BiUserCircle className="text-2xl text-yellow-500"/>
           <h3 className='my-2'>{book.author}</h3>
           </div>
           <div className='flex w-full justify-between px-10 mt-5'>
           <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="w-5 h-5" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                <AiOutlineEdit className="w-5 h-5 text-yellow"/>
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                <BsTrash className="w-5 h-5"/>
                </Link>
           </div>
           {showModal && (
            <BookModal book={book} onClose={()=>setShowModal(false)}/>
           )}
        </div>
  )
}

export default SingleCard
