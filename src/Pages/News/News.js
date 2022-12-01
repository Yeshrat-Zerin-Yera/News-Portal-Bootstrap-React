import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';

const News = () => {
    const news = useLoaderData();
    const { author, details, image_url, rating, title } = news;

    return (
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <div className='mb-2'>
                    <p className='m-0'><span className='fw-bold'>Author: </span>{author?.name}</p>
                    <p className='m-0'><span className='fw-bold'>Published Date: </span> {author?.published_date}</p>
                    <div className='m-0 d-flex align-items-center'>
                        <FaStar className='text-warning me-2' />
                        <span>{rating?.number}</span>
                    </div>
                </div>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default News;