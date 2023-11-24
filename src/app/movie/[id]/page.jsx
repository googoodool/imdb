import Image from "next/image";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY2YmJmMThkNWIzNTE1N2ZiNWQyM2FmZDg1YjZiMSIsInN1YiI6IjVlZTRmNDg4Y2I3MWI4MDAxZmIzZGRlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AkVQsgNeyhU9iO0Rek45Zc9jsl_Oj1IQ9BJ4p2n926k",
  },
};

async function MoviePage({ params }) {
  const movieID = params.id;
  const res = await fetch(
    `
     https://api.themoviedb.org/3/movie/${movieID}?language=en-US 
    `,
    options
  );
  const movie = await res.json();

  console.log(movie);

  return (
    <div className="w-full">
      <div className="p-4 md:p-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Movie Poster"
          style={{ maxWidth: "100%", height: "100%" }}
        ></Image>
        <div className="p-2">
          <h2 className="mb-3 text-lg font-bold text-amber-500 ">
            {movie.title || movie.name}
          </h2>
          <p className="mb-3">
            <span className="text-lg font-bold">OVERVIEW : </span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="text-lg font-semibold">Date Released : </span>
            {movie.release_date}
          </p>
          <p className="mb-3">
            <span className="text-lg font-semibold">Rating : </span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
export default MoviePage;
