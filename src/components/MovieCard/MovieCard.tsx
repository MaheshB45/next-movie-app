import Image from "next/image";
import Link from "next/link";

interface MovieCardProps {
  posterPath: string;
  title: string;
  description: string;
  id: number;
}

const MovieCard = ({posterPath, title, description, id} : MovieCardProps) => {
  return (
    <div className="grid grid-cols-3 gap-8">
       <Link href={`/movie/${id}`}>
        <div
          className="flex flex-col bg-[#FFF] rounded-lg shadow-lg overflow-hidden w-[300px] cursor-pointer transition ease-in-out delay-100 duration-200 hover:scale-105"
        >
          <Image
            className="w-[100%] h-auto"
            src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title}
            width={280}
            height={300}
          />
          <div className="p-3 text-center bg-[#f6f3f3]">
            <h2 className="m-0 text-[1.2em] text-[#000] font-medium">{title}</h2>
            <p className="text-[0.8em]">{description.substring(0,100)}...</p>
          </div>
        </div>
       </Link>
      
    </div>
  );
};

export default MovieCard;
