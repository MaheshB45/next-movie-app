import MovieCard from "@/components/MovieCard/MovieCard";

interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const apiKey = process.env.API_KEY;

const getMovies = async () => {
  try {
    const moviesList = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    );

    if (!moviesList.ok) {
      throw new Error(`Error: ${moviesList.status}`);
    }

    const moviesListJSON = await moviesList.json();
    return moviesListJSON;
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    throw error;
  }
};

export default async function Home() {
  const movieList = await getMovies(); // Fetch the movies here
  
  return (
    <main className="p-[1rem]">
      <h1 className="my-6 text-center font-semibold text-2xl">
        The Movie Database
      </h1>

      <section>
        <div className="flex flex-wrap justify-center gap-3">
          {movieList?.results.length > 0 &&
            movieList.results.map((movie: MovieDetails) => {
              return (
                <MovieCard
                  key={movie.id}
                  posterPath={movie.poster_path}
                  title={movie.title}
                  description={movie.overview}
                  id={movie.id}
                />
              );
            })}
        </div>
      </section>
    </main>
  );
}