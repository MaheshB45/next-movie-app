import MovieCard from "@/components/MovieCard/MovieCard"

export default function Home() {
  return (
    <main className="p-[1rem]">
      <h1 className="my-6 text-center font-semibold text-2xl">The Movie Database</h1>

      <section>
        <div className="flex flex-wrap justify-center gap-3">
         <MovieCard />
        </div>
      </section>
    </main>
  );
}
