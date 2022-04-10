import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

function Ad(props) {
    const date = new Date(props.info.date);
    const now = new Date();
    const diffYears = now.getFullYear() - date.getFullYear();
    const diffMonths = now.getMonth() - date.getMonth();
    let diffStr;
    if (diffYears > 0) {
        diffStr = `posted ${diffYears} year${diffYears > 1 ? 's' : ''} ago`;
    } else if (diffMonths > 0) {
        diffStr = `posted ${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`;
    } else {
        diffStr = 'new';
    }

    const userControls = (
        <div>
            <Button onClick={() => props.openEditor(props.info)}>Edit</Button>
            <Button onClick={() => props.deleteAd(props.info._id)}>Delete</Button>
        </div>
    );
    const images = props.info.images.length === 0 ? null : 
        (<Carousel>{props.info.images.map((url, i) => <Carousel.Item key={i}><img className="d-block w-100" alt="" src={url}/></Carousel.Item>)}</Carousel>);

    return (
        <Card style={{width: '80%', margin: '20px auto'}}>
            <Card.Body>
                {props.isEditable ? userControls : null}
                <Card.Title>{props.info.title}</Card.Title>
                <Badge pill bg="primary">{props.info.category}</Badge>
                <Badge pill bg="secondary">{diffStr}</Badge>
                <Badge pill bg="secondary">{props.info.location.city}, {props.info.location.province}</Badge>
                <Card.Text>${props.info.price}</Card.Text>
                <Card.Text>{props.info.description}</Card.Text>
                {images}
            </Card.Body>
        </Card>
    );
}

export default Ad;