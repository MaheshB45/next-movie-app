import Image from "next/image";

interface MovieDetailsProps {
    posterPath: string;
    title: string;
    description: string;
    releaseDate: string;
    rating: number;
}

const MovieDetails = ({posterPath, title, description, releaseDate, rating} : MovieDetailsProps) => {
  return (
    <div className="flex flex-col items-center p-5">
      <Image className="rounded-lg" src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} width={500} height={720} />
      <h1 className="text-[2em] text-[#0070f3] my-5">{title}</h1>
      <p className="text-[1.2em] text-[#333] text-center max-w-[600px]">{description}</p>
      <div className="mt-3 text-[1em] text-[#666]">
        <p className="my-1"><strong>Release Date:</strong>{releaseDate}</p>
        <p className="my-1"><strong>Rating:</strong> {rating}</p>
      </div>
    </div>
  )
}

export default MovieDetails;