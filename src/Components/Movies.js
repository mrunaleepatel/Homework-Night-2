import Movie from "./Movie";
// the component function
const Movies = ({movies}) => {

    //The Components Returned JSX
    return (
        <div>
            {movies.map((movie, index) => (
                <Movie
                key={index}
                name={movie.name}
                year={movie.year}
                rating={movie.rating}
                image={movie.image}
                />
            ))}
    </div>
    )
}

// export the component
export default Movies