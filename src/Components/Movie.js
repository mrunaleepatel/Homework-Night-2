// the component function
const Movie = ({name, year, rating, image}) => {

    //The Components Returned JSX
    return ( 
        <div className="movie-container">
            <h2>{name}</h2>
            <p>Year: {year}</p>
            <p>Rating: {rating}</p>
            <img src={image} alt={name} style={{ maxWidth: '200px' }} />
  </div>
    )
}

// export the component
export default Movie
