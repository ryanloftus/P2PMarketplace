import Card from 'react-bootstrap/Card';

function Ad(props) {
    return (
        <Card style={{width:'60%', margin: '20px auto'}}>
            <Card.Body>
                <Card.Title>{props.info.title}</Card.Title>
                <Card.Text>{props.info.description}</Card.Text>
                <Card.Text>{props.info.date}</Card.Text>
                <Card.Text>{props.info.user}</Card.Text>
                <Card.Text>{props.info.location}</Card.Text>
                <Card.Text>{props.info.price}</Card.Text>
                <Card.Text>{props.info.category}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Ad;