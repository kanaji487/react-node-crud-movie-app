import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
    const [movie, setMovie] = useState({
        name: "",
        desc: "",
        image: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setMovie((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:5000/movies", movie);
            navigate("/");
        } catch(error) {
            console.log(error);
        }
    }
  return (
    <div>
        <h1 className='text-white text-xl text-center font-bold my-4'>Add new movie</h1>

        <form className='max-w-lg mx-auto'>
            <div className='mb-4'>
                <input 
                    type='text' 
                    placeholder='movie name' 
                    name="name" 
                    onChange={handleChange} 
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
                />
            </div>
            <div className='mb-4'>
                <input 
                    type='text' 
                    placeholder='movie description' 
                    name="desc" 
                    onChange={handleChange} 
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
                />
            </div>
            <div className='mb-4'>
                <input 
                    type='text' 
                    placeholder='movie image' 
                    name="image" 
                    onChange={handleChange} 
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
                />
            </div>
            <button 
                onClick={handleClick} 
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
                Add
            </button>
        </form>
    </div>
  )
}

export default AddMovie;