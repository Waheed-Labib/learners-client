import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'

const Slider = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className='mt-5 slider' activeIndex={index} onSelect={handleSelect}>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://assets.telegraphindia.com/abped/2020/Sep/1600356246_iiit.jpg"
                    alt="Second slide"
                />


            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://theyuvas.com/wp-content/uploads/2021/08/Data-Structures-and-Algorithm.png"
                    alt="First slide"
                />

            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://wallpapercave.com/wp/wp3929768.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Cloud Computing</h3>
                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.cdn3.stockunlimited.net/preview1300/search-engine-optimization-concept_1953273.jpg"
                    alt="Third slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.thefastmode.com/media/k2/items/src/a2ec74156ccb74d31d55c59c4074ad2d.jpg?t=20200605_094647"
                    alt="Third slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://wallpaperaccess.com/full/1947431.jpg"
                    alt="Third slide"
                />


            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;