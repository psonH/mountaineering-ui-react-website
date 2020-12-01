import React from 'react'
import { Carousel } from 'react-bootstrap'
import coro1 from './images/coro-1.jpg'
import coro2 from './images/coro-2.jpg'
import coro3 from './images/coro-3.jpg'

export const Slider = () => {
    return (
        <div name="home">
            <Carousel>
                <Carousel.Item>
                    <div className="home-slider" >
                        <img
                            className="d-block w-100"
                            src={coro1}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>Immerse Yourself in Tranquility</h3>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="home-slider">
                        <img
                            className="d-block w-100"
                            src={coro2}
                            alt="Third slide"
                        />
                    </div>
                    
                    <Carousel.Caption>
                    <h3>Explore the Unknown</h3>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="home-slider">
                        <img
                        className="d-block w-100"
                        src={coro3}
                        alt="Third slide"
                        />
                    </div>
                    <Carousel.Caption>
                    <h3>Breathe In, Breathe Out</h3>
                    {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
