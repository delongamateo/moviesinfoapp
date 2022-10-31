import React from 'react'
import {
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
} from "@chakra-ui/react"
import { useGetGenres } from '../../api/api'
import GenreMovieList from '../GenreMovieList'

const MovieDiscoveryPage = () => {
    const genresList = useGetGenres()

    return (
        <VStack bgColor="gray.900" h="100vh" px={12}>
            <Text>MovieDiscoveryPage</Text>
            {genresList?.genres.map((genre) => (
                genre.id === 28 &&
                <GenreMovieList key={genre.id} genre={genre} />
            ))}

        </VStack>
    )
}

export default MovieDiscoveryPage