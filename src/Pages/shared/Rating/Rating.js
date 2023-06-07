import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Rating = ({ rating }) => {
    const stars = [];

    if ([1, 2, 3, 4, 5].includes(rating)) {
        for (let i = 0; i < rating; i++) {
            stars.push(<FaStar />);
        }
        return <div className='text-warning fs-3'>{stars}</div>;
    }


    else {
        for (let i = 0; i < rating - 1; i++) {
            stars.push(<FaStar></FaStar>)
        }

        stars.push(<FaStarHalfAlt></FaStarHalfAlt>)

        return <div className='text-warning fs-3'>{stars}</div>
    }
}

export default Rating;