import "./App.css";

function App() {
    const movies = [
  {
    title: "Avatar",
    year: "2009",
    runtime: "162 min",
    director: "James Cameron",
    image:
   "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
    genres: ["Action", "Adventure", "Fantasy"],
    imdbRating: "7.9",
    imdbVotes: "890,617",
  },
    // ....
  ]
  return (
    <div className="App">
      <section className="movie-list-section">
        <h1 className="app-heading">Movie List Section</h1>
        
        {movies.map((item, index) => (
          <div key={index} className="movie-card">
            
            {/* ฝั่งซ้าย: รูปภาพ */}
            <div className="movie-image">
              <img src={item.image} alt={item.title} />
            </div>

            {/* ฝั่งขวา: รายละเอียด */}
            <div className="movie-details">
              <div className="movie-title">Title: {item.title}</div>
              <div>Year: {item.year}</div>
              <div>Runtime: {item.runtime}</div>

              {/* วนลูป Genres ข้างในอีกรอบ */}
              <div className="genre-container">
                <span>Genres: </span>
                {item.genres.map((genre, gIndex) => (
                  <span key={gIndex} className="genre-tag">
                    {genre}
                  </span>
                ))}
              </div>

              <div>IMDB Rating: {item.imdbRating}</div>
              <div>IMDB Votes: {item.imdbVotes}</div>
            </div>

          </div>
        ))}
      </section>
    </div>
  );
}

export default App;