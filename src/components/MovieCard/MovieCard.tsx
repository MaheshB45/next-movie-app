import Image from 'next/image'

interface MovieCardProps {
    posterPath: string;
    title: string;
    description: string;
    id: number;
}

const MovieCard = ({posterPath, title, description, id} : MovieCardProps) => {
  return (
    <div className="flex flex-col bg-[#FFF] rounded-lg shadow-lg overflow-hidden w-[300px] cursor-pointer transition ease-in-out delay-100 duration-200 hover:scale-105">
      <Image className="w-[100%] h-auto" src="" alt="title" width={300} height={220} />
      <div className="p-3">
        <h2 className="m-0 text-[1.2em] text-[#0070f3]">title</h2>
        <p className="text-[0.9em] text-[#333]">description...</p>
     </div> 
    </div>
  )
}

export default MovieCard