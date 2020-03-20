import React,{useEffect,useState} from 'react'
import Axios from "axios";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import {Card} from "react-bootstrap";



export default function singleMoviePage(props) {
    const [movie,setMovie] = useState({});

        useEffect(()=>{
            Axios.get(
                `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=02689249b40636b114a2add6006bff65&language=en-US`
            )
                .then(res=>setMovie(res.data))
                .catch(err=>console.error(err))
        },[]);
    console.log('Hello');

    console.log( props.match.params.id);
    return(
        <Container>
            <Row>
                <Col md='6'>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='movie image'/>
                </Col>
                <Col md='6'>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                   <ul>
                       <li>Release Date:{movie.release_date}</li>
                       <li>Rating:{movie.vote_average}</li>
                       <li>Status:{movie.status}</li>
                   </ul>
                </Col>


            </Row>
        </Container>

    );



}