import { useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchAllMovies = async () => {
            try {
                const res = await axios.get("http://localhost:5000/movies");
                setMovies(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllMovies();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:5000/movies/"+id);
            window.location.reload();
        } catch(error) {
            console.log(error);
        }
    }
  return (
    <div>
      <h1 className="text-center text-white text-xl my-4">Movie Store</h1>
      <button className="btn btn-active btn-accent ml-10">
        <Link to="/add">Add new movie</Link>
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-2">
        {movies.map((movie) => (
          <div
            className="card w-96 bg-neutral-700 shadow-xl mx-10 my-2"
            key={movie.id}
          >
            <figure>
              {movie.image && <img src={movie.image} alt={movie.name} />}
            </figure>
            <div className="card-body">
              <h2 className="card-title">{movie.name}</h2>
              <p>{movie.desc}</p>
              <div className="card-actions justify-end mt-6">
                <button
                  className="btn btn-error"
                  onClick={() => handleDelete(movie.id)}
                >
                  Delete
                </button>
                <button className="btn btn-success">
                  <Link to={`/update/${movie.id}`}>Update</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <button>
        <Link to="/add">Add new movie</Link>
      </button> */}
    </div>
  );
}

export default Movies;