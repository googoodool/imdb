import Results from "@/components/Results";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY2YmJmMThkNWIzNTE1N2ZiNWQyM2FmZDg1YjZiMSIsInN1YiI6IjVlZTRmNDg4Y2I3MWI4MDAxZmIzZGRlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AkVQsgNeyhU9iO0Rek45Zc9jsl_Oj1IQ9BJ4p2n926k",
  },
};

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    // `https://api.themoviedb.org/3/trending/${
    //   genre === "fetchTopRated" ? "tv" : "movie"
    // }/week?language=en-US`,
    // options

    `${
      genre === "fetchTopRated"
        ? "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1"
        : "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1"
    } `,
    options,
    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const results = data.results;
  console.log(results);
  console.log(genre);

  return (
    <div>
      <Results results={results} />
    </div>
  );
}

//https://api.themoviedb.org/3/tv/popular?language=en-US&page=1
//https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1
