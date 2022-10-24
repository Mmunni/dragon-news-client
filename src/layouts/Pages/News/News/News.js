import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const News = () => {
    const news = useLoaderData();
    const { title, details, image_url,} = news
    return (
        <div>
            <Card>
                 <Card.Img variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {details}
                             </Card.Text>
                               
                    </Card.Body>
                </Card>
        </div>
    );
};

export default News;