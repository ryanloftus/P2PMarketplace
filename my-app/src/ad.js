import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-bootstrap/Carousel';

function Ad(props) {
    return (
        <Card style={{width: '80%', margin: '20px auto'}}>
            <Card.Body>
                <Card.Title>{props.info.title}</Card.Title>
                <Badge pill bg="primary">{props.info.category}</Badge>
                <Card.Text>{props.info.description}</Card.Text>
                <Card.Text>{props.info.date}</Card.Text>
                <Card.Text>{props.info.user}</Card.Text>
                <Card.Text>{props.info.location.address}, {props.info.location.city}, {props.info.location.province}</Card.Text>
                <Card.Text>{props.info.price}</Card.Text>
                <Carousel>
                    {props.info.images.map(url => <Carousel.Item><img className="d-block w-100" src={url}/></Carousel.Item>)}
                </Carousel>
            </Card.Body>
        </Card>
    );
}

export default Ad;