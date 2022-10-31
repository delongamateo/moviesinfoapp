import React from 'react'
import { useGetMovieByID } from '../../api/api'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
    const { id } = useParams()
    const movieByID = useGetMovieByID(!!id, id)

    return (
        <div>{movieByID?.title}</div>
    )
}

export default MovieDetails