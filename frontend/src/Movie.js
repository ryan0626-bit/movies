import axios from "axios";

function Movie() {
  const createMovie = async () => {
    let response = await axios.post("http://127.0.0.1:5001/dev/createmovie", {
      movie: "avengers",
      username: "ryan",
    });
    console.log(response.data);
  };
  return (
    <div className="App">
      {/* <button onClick={createMovie}>Create Movie</button> */}
    </div>
  );
}

export default Movie;
