import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';

const Quotes = () => {

    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/quotations')
            .then(res => res.json())
            .then(data => setQuotes(data))
    }, [])

    return (
        <div className='mt-5'>
            {
                quotes.map(quote => <div className='mb-5'>
                    <Image height={'100px'} width={'100px'} src={quote.image} roundedCircle></Image>
                    <h5 className='mt-2'>{quote.student_name}</h5>
                    <p><small>{quote.location}</small></p>
                    <hr className='mx-auto w-25'></hr>
                    <p>"{quote.quote}"</p>
                </div>)
            }
        </div >

    );
};

export default Quotes;