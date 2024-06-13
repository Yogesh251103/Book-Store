import React,{useState,useEffect} from 'react'
import BackButton from '../components/backButton'
import Spinner from '../components/spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'

export default function EditBook() {
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [publishYear,setPublishYear] = useState('');
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  const {enqueueSnackbar} = useSnackbar();

  const {id} = useParams();
  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
    .then((res)=>{
      console.log(res.data);
      setLoading(false);
      setTitle(res.data.title);
      setAuthor(res.data.author);
      setPublishYear(res.data.publishYear);
    })
    .catch((err)=>{
      console.log(err);
      setLoading(false);
    })
  },[])

  const pressHandler = async() =>{
    const data={
      title,
      author,
      publishYear
    }
      setLoading(true);
      axios.put(`http://localhost:5555/books/${id}`,data)
      .then((res)=>{
        console.log(res)
        setLoading(false);
        enqueueSnackbar('Successfully Updated',{variant:'success'});
        navigate('/');
      })
      .catch((err)=>{
        console.log(err);
        setLoading(false);
        enqueueSnackbar('Updation failed',{variant:'error'});
        navigate('/');
      })
  }

  return (
    <div className=' bg-black min-h-[100vh] w-full flex justify-center items-center'>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col border-2 border-yellow-500 rounded-xl p-4 mx-auto w-3/5 self-center'>
      <h1 className='text-gray-300 text-center text-3xl font-semibold'>Edit details of Book</h1>
        <div className='my-12 ml-5 flex flex-col space-y-2'>
        <label className='text-gray-300 font-semibold'>Title:</label>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className='w-4/5 rounded-sm p-2'/>
        <label className='text-gray-300 font-semibold'>Author Name:</label>
        <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} className='w-4/5 rounded-sm p-2'/>
        <label className='text-gray-300 font-semibold'>Published Year:</label>
        <input type="text" value={publishYear} onChange={(e)=>setPublishYear(e.target.value)} className='w-4/5 rounded-sm p-2'/>
        </div>
     <button className='w-24 bg-yellow-500 p-2 rounded-md text-white font-semibold self-center' onClick={pressHandler}>Save</button>
      </div>
    </div>
  )
}