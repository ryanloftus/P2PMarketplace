import Card from 'react-bootstrap/Card';

function Ad(props) {
    return (
        <Card style={{width:'40%', margin:'auto'}}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Card.Text>{props.date}</Card.Text>
                <Card.Text>{props.user}</Card.Text>
                <Card.Text>{props.location}</Card.Text>
                <Card.Text>{props.price}</Card.Text>
                <Card.Text>{props.category}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Ad;