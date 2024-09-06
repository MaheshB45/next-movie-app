import Image from "next/image";
import { movieData } from "@/data/data";

// interface MovieCardProps {
//     moviePoster: string;
//     title: string;
//     description: string;
//     id: number;
// }

const MovieCard = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {movieData.map((movie, index) => (
        <div
          key={index}
          className="flex flex-col bg-[#FFF] rounded-lg shadow-lg overflow-hidden w-[300px] cursor-pointer transition ease-in-out delay-100 duration-200 hover:scale-105"
        >
          <Image
            className="w-[100%] h-auto"
            src={movie.moviePoster}
            alt="title"
            width={280}
            height={300}
          />
          <div className="p-3 text-center bg-[#f6f3f3]">
            <h2 className="m-0 text-[1.2em] text-[#000] font-medium">{movie.title}</h2>
            
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default MovieCard;
