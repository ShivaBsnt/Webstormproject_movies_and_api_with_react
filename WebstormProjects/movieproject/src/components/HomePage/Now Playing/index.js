
import React, { Component } from "react";
import {Container,Card,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



export default function NowPlaying ({movie}) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
    };
    return(


        <Container>
            <div className="clearfix">
                <h4 className='float-left mt-4 mb-2'>Now Playing</h4>
                <Link to='/' className='float-right text-uppercase mt-4 mb-2'>see all</Link>

            </div>

            <Slider {...settings}>
            {movie.map(function (movie) {
                return(
                    <React.Fragment>
                    <Link to={`movies/${movie.id} `}>

                        <Card>
                            <Card.Img variant='top'
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                            </Card.Body>

                        </Card>
                    </Link>

                    </React.Fragment>
                );

            })}
            </Slider>
        </Container>

    );

}