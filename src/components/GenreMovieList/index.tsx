import { FC, useEffect, useRef, useState } from 'react'
import { Genre } from '../../api/apiTypes';
import { useGetMoviesByGenre } from '../../api/api';
import MovieCard from "../MovieCard"
import { HStack, Text, VStack } from '@chakra-ui/react';
import SliderButton from './SliderButton';

type GenreMovieListProps = {
    genre: Genre;
}

const GenreMovieList: FC<GenreMovieListProps> = ({ genre }) => {
    const [offsetWidthValue, setOffsetWidthValue] = useState<number>()
    const [showButtons, setShowButtons] = useState<boolean>(false)
    const moviesByGenreList = useGetMoviesByGenre(genre.id)
    const ref = useRef<HTMLDivElement>(null)
    const offsetWidth = ref.current?.offsetWidth

    useEffect(() => {
        setOffsetWidthValue(offsetWidth)
    }, [offsetWidth])

    return (
        <VStack>
            <Text color="white" alignSelf="start">{genre.name}</Text>
            <HStack
                overflowX="scroll"
                sx={
                    {
                        '::-webkit-scrollbar': {
                            display: 'none'
                        }
                    }
                }
                ref={ref}
                pos="relative"
                onMouseEnter={() => setShowButtons(true)}
                onMouseLeave={() => setShowButtons(false)}
            >
                {moviesByGenreList?.results.map((movie, i) => (
                    <MovieCard id={movie.id} poster_path={movie.poster_path} key={i} />
                ))}
                {showButtons && <SliderButton side="left" divRef={ref} />}
                {showButtons && <SliderButton side="right" offsetWidthValue={offsetWidthValue} divRef={ref} />}
            </HStack>

        </VStack >


    )
}

export default GenreMovieList