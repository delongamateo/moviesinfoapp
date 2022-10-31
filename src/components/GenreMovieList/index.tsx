import { FC, useEffect, useRef, useState } from 'react'
import { Genre } from '../../api/apiTypes';
import { useGetMoviesByGenre } from '../../api/api';
import MovieCard from "../MovieCard"
import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';

type GenreMovieListProps = {
    genre: Genre;
}

const GenreMovieList: FC<GenreMovieListProps> = ({ genre }) => {
    const [offsetWidthValue, setOffsetWidthValue] = useState<number>()
    const [showButtons, setShowButtons] = useState<boolean>(false)
    const moviesByGenreList = useGetMoviesByGenre(genre.id)
    const ref = useRef<HTMLDivElement>(null)
    const scrool = ref.current?.scrollLeft
    const scrollWidthValue = ref.current?.scrollWidth
    const offsetWidth = ref.current?.offsetWidth

    useEffect(() => {
        const scrollWidthValue = ref.current?.scrollWidth
        setOffsetWidthValue(offsetWidth)
    }, [offsetWidth])

    const scrollLeft = () => {
        const offsetWidthValue = ref.current?.offsetWidth
        const scrollWidthValue = ref.current?.scrollWidth
        if (!offsetWidthValue) return;
        console.log(offsetWidthValue)
        ref.current!.scrollLeft += offsetWidthValue - 150
        console.log(ref.current!.scrollLeft)
    }

    const scrollRight = () => {
        const offsetWidthValue = ref.current?.offsetWidth
        const scrollWidthValue = ref.current?.scrollWidth
        if (!offsetWidthValue) return;
        console.log(offsetWidthValue)
        ref.current!.scrollLeft -= offsetWidthValue - 150
        console.log(ref.current!.scrollLeft)
    }

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
                {showButtons && <Button onClick={scrollRight} pos="fixed" h={72} borderRadius="none" color="white" bg="rgba(0, 0, 0, 0.5)" _hover={{ bg: "rgba(0, 0, 0, 0.5)" }} _active={{ bg: "rgba(0, 0, 0, 0.5)" }}>{"<"}</Button>}
                {showButtons && <Button onClick={scrollLeft} pos="fixed" h={72} left={offsetWidthValue} borderRadius="none">{">"}</Button>}
            </HStack>

        </VStack >


    )
}

export default GenreMovieList