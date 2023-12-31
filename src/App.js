import './App.css';
import Movies from './Components/Movies';

function App() {

  const movies = [
    {
      name: "Mission: Impossible - Dead Reckoning Part One",
      year: "2023",
      rating: "8.1",
      image: "https://m.media-amazon.com/images/M/MV5BYzFiZjc1YzctMDY3Zi00NGE5LTlmNWEtN2Q3OWFjYjY1NGM2XkEyXkFqcGdeQXVyMTUyMTUzNjQ0._V1_.jpg"

    },
    {
      name: "Oppenhermer",
      year: "2023",
      rating: "9.0",
      image: "https://cdn.artstation.com/p/thumbnails/001/324/070/thumb.jpg"

    },
    {
      name: "The Dark Knight",
      year: "2008",
      rating: "9.0",
      image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"

    },
    {
      name: "Jai Bhim",
      year: "2021",
      rating: "8.8",
      image: "https://www.bostoniff.com/wp-content/uploads/2022/03/Jai-Bhim.png"

    },
    {
      name: "Interstellar",
      year: "2014",
      rating: "8.7",
      image: "https://m.media-amazon.com/images/I/61pyUElLh7L._AC_UF894,1000_QL80_.jpg"

    },
  ]


  return (
    <div className="App">
      <Movies movies={movies}/>
    </div>
  );
}

export default App;

