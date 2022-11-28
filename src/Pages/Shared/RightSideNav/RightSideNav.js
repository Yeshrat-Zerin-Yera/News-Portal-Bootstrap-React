import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaTwitter, FaWhatsapp, FaDiscord } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup className='mb-4' vertical>
                <Button className='mb-2 rounded' variant="outline-primary"><FaGoogle /> Login Via Google</Button>
                <Button className='rounded' variant="outline-dark"><FaGithub /> Login Via Github</Button>
            </ButtonGroup>
            <div className='mb-4'>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2 rounded border'><FaYoutube /> Youtube </ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded border'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded border'><FaDiscord /> Discord</ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded border'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2 rounded border'><FaWhatsapp /> Whatsapp</ListGroup.Item>
                </ListGroup>
            </div>
            <BrandCarousel></BrandCarousel>
        </div>
    );
};

export default RightSideNav;