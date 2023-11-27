import Results from "@/components/Results";

async function SearchPage({ params }) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY2YmJmMThkNWIzNTE1N2ZiNWQyM2FmZDg1YjZiMSIsInN1YiI6IjVlZTRmNDg4Y2I3MWI4MDAxZmIzZGRlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AkVQsgNeyhU9iO0Rek45Zc9jsl_Oj1IQ9BJ4p2n926k",
    },
  };
  const viewMovie = params.searchTerm;
  //   console.log(viewMovie);

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${viewMovie}&include_adult=false&language=en-US&page=1`,
    options
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const results = data.results;
  console.log(results);

  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center py-6">No Result Found</h1>
      )}
      {results && <Results results={results} />}
    </div>
  );
}
export default SearchPage;
