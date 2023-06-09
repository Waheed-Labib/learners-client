import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorBoundary = () => {
    const error = useRouteError();
    console.error(error.message);

    return (
        <div style={{ height: "70vh" }} className='d-flex align-items-center justify-content-center'>
            <div>
                <h1>Ooops !</h1>
                <p className='fw-semibold text-danger fw-bold'>{error.message}</p>
                {
                    error.message === 'Failed to fetch' && <p className='fw-semibold'>Please check your internet connection</p>
                }
            </div>


        </div>
    );
};

export default ErrorBoundary;