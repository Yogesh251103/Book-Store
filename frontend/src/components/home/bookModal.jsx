import React from 'react'
import {PiBookOpenTextLight} from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const BookModal = ({book,onClose}) => {
  return (
    <div className='fixed bg-black top-0 left-0 right-0 bottom-0 z-50 justify-center items-center' onClick={onClose}>
      <div onClick={(e)=>e.stopPropagation()} className='w-[600px] max-w-full h-[400px] bg-white rounded-xl flex flex-col relative'>
        <AiOutlineClose className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer' onClick={onClose}/>
        <h4 className='w-fit bg-green-500 py-1 px-3 rounded-lg font-semibold'>{book.publishYear}</h4>
           <h4 className='text-gray-300'>{book._id}</h4>
           <div className='flex items-center gap-x-2'>
           <PiBookOpenTextLight className="text-2xl"/>
           <h3 className='my-2'>{book.title}</h3>
           </div>
           <div className='flex items-center gap-x-2'>
            <BiUserCircle className="text-2xl"/>
           <h3 className='my-2'>{book.author}</h3>
           </div>
      </div>
    </div>
  )
}

export default BookModal
