import { FC, RefObject } from 'react'
import { Image } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

type MovieCardProps = {
    id: number;
    poster_path: string | null;
}

const MovieCard: FC<MovieCardProps> = ({ id, poster_path }) => {
    const navigate = useNavigate()
    return (
        <Image src={`https://image.tmdb.org/t/p/original${poster_path}`} w={64} h={72} borderRadius="md" onClick={() => navigate(`/movie/${id}`)} />
    )
}

export default MovieCard