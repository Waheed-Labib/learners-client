import React from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Rating = ({ rating }) => {
    const stars = [];

    if ([1, 2, 3, 4, 5].includes(rating)) {
        for (let i = 0; i < rating; i++) {
            stars.push(<FaStar />);
        }
        for (let j = 0; j < (5 - rating); j++) {
            stars.push(<FaRegStar></FaRegStar>)
        }
        return <div className='text-warning'>{stars}</div>;
    }


    else {
        for (let i = 0; i < rating - 1; i++) {
            stars.push(<FaStar></FaStar>)
        }

        stars.push(<FaStarHalfAlt></FaStarHalfAlt>)

        for (let j = 0; j < (4 - rating); j++) {
            stars.push(<FaRegStar></FaRegStar>)
        }
        return <div className='text-warning'>{stars}</div>
    }
}

export default Rating;