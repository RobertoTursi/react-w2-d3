import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Card, Button } from "react-bootstrap"

const MovieDetails = () => {
    const params = useParams()
    console.log(params)
    const [film, setFilm] = useState([])
    const [comment, setComment] = useState([])

    const singleMovieFetch = async () =>{
        try {
            const response = await fetch("https://www.omdbapi.com/?apikey=de0e22be&i=" + params.movieId)
            if(response.ok){
                const data = await response.json()
                setFilm(data)
            }
        } catch (error) {
            console.log(error)
        }
    }


    const singleCommentFetch = async () =>{
        try {
            const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + params.movieId, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VkMGUyYjlhYzBiNzAwMTM0YjAzOGIiLCJpYXQiOjE2NzY0ODAwNDMsImV4cCI6MTY3NzY4OTY0M30.sdRn3ZsLeLNyC3zWynkn-QWhCaS7NCViJwKnq8yePnw"
                }
            })
            
            if(response.ok){
                const dataComment = await response.json()
                console.log(dataComment)
                setComment(dataComment)
                console.log(comment)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        singleMovieFetch()
        singleCommentFetch()
    }, [params.movieId])



    return(
        <>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{film.Title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    {comment && comment.map((comment) => 
        <div key={comment._id}>{comment.comment}</div>
    )}
        </>
       
    )
}

export default MovieDetails