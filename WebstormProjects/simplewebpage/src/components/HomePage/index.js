import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Carousel,Container} from 'react-bootstrap'
import React from 'react';
import {CarouselWrapper} from "./style";
export default function Home() {
    return(
        <CarouselWrapper>

        <Container>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 mt-4"
                    src="/images/react3.jpg"
                    alt="First slide"
                />
                {/*<Carousel.Caption>*/}
                {/*    <h3>First slide label</h3>*/}
                {/*    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                {/*</Carousel.Caption>*/}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 mt-4"
                    src="/images/react1.png"
                    alt="Third slide"
                />

                {/*<Carousel.Caption>*/}
                {/*    <h3>Second slide label</h3>*/}
                {/*    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
                {/*</Carousel.Caption>*/}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 mt-4"
                    src="/images/react2.jpg"
                    alt="Third slide"
                />

                {/*<Carousel.Caption>*/}
                {/*    <h3>Third slide label</h3>*/}
                {/*    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
                {/*</Carousel.Caption>*/}
            </Carousel.Item>
        </Carousel>
        </Container>
        </CarouselWrapper>

    )

}