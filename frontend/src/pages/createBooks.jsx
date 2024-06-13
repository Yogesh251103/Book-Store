import React,{useState} from 'react'
import BackButton from '../components/backButton'
import Spinner from '../components/spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import { useSnackbar } from 'notistack'

export default function CreateBook() {
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [publishYear,setPublishYear] = useState('');
  const [loading,setLoading] = useState(false);

  const {enqueueSnackbar} = useSnackbar();
  const navigate = useNavigate();

  const pressHandler = async() =>{
    const data={
      title,
      author,
      publishYear
    }
      setLoading(true);
      axios.post('http://localhost:5555/books',data)
      .then((res)=>{
        console.log(res)
        setLoading(false);
        enqueueSnackbar('Book added sucessfully',{variant:'success'})
        navigate('/');
      })
      .catch((err)=>{
        console.log(err);
        setLoading(false);
        enqueueSnackbar('Book not added',{variant:'error'})
      })
  }

  return (
    <div className='w-full min-h-[100vh] bg-black flex justify-center items-center'>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col border-2 border-yellow-500 rounded-xl p-4 mx-auto w-3/5'>
      <h1 className='font-bold text-gray-300 text-3xl text-center'>Add a Book</h1>
        <div className='my-9 ml-5 flex flex-col space-y-2'>
        
        <label className='text-gray-300'>Title:</label>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className='w-4/5 p-2 rounded-sm'/>
        <label className='text-gray-300'>Author Name:</label>
        <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} className='w-4/5 p-2 rounded-sm'/>
        <label className='text-gray-300'>Published Year:</label>
        <input type="text" value={publishYear} onChange={(e)=>setPublishYear(e.target.value)} className='w-4/5 p-2 rounded-sm'/>
        </div>
     <button className='w-24 p-3 bg-yellow-500 rounded-md text-white self-center font-semibold' onClick={pressHandler}>Save</button>
      </div>
    </div>
  )
}