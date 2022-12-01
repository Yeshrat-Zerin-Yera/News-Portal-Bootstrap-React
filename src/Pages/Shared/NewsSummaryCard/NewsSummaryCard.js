import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsSummaryCard = ({ news }) => {
    const { author, details, image_url, rating, title, total_view, _id } = news;

    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <Image src={author?.img} style={{ height: '60px' }} roundedCircle className='me-2'></Image>
                    <div>
                        <p className='m-0'>{author?.name}</p>
                        <p className='m-0'>{author?.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-2' />
                    <FaShareAlt className='me-2' />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} className='mb-2' />
                <Card.Text>
                    {
                        details?.length > 250 ?
                            <p>{details.slice(0, 250)} <Link to={`/news/${_id}`} className='text-decoration-none'> ...Read More</Link></p> :
                            <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-between align-items-center">
                    <FaStar className='me-2 text-warning' />
                    <span>{rating?.number}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <FaEye className='me-2' />
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;