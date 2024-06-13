import React,{useState} from 'react'
import axios from "axios"
import Spinner from '../components/spinner'
import BackButton from '../components/backButton'
import { useNavigate,useParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import { useSnackbar } from 'notistack'

export default function DeleteBook() {
  const [loading,setLoading] = useState(false);
  const navigation = useNavigate();
  const {id} = useParams();

  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();
  
  const pressHandler = () =>{
    setLoading(true);
    axios.delete(`http://localhost:5555/books/${id}`)
    .then((res)=>{
      console.log(res);
      setLoading(false);
      enqueueSnackbar('Book deleted sucessfully',{variant:'success'});
      navigate('/');
    })
    .catch((err)=>{
      console.log(err);
      setLoading(false);
      enqueueSnackbar('Book not deleted',{variant:'error'});
      navigate('/');
    })
  }
  return (
    <div className='w-full min-h-[100vh] bg-black flex justify-center items-center'>
      <h1>Delete Book</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col border-2 border-yellow-500 rounded-xl p-5 mx-auto'>
        <div className='my-12 flex flex-col space-y-2'>
        <label className='text-gray-300 font-semibold'>Are you sure you want to delete this book?</label>
        </div>
      <Button className='w-24' style={{backgroundColor:"red",alignSelf:"center"}} onClick={pressHandler} variant="contained">Delete</Button>
      </div>
    </div>
  )
}
