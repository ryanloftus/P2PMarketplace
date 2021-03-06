import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';

const rowStyle = {marginTop: '10px'};

function AdEditor(props) {
    const [title, setTitle] = useState(props.adInfo?.title || '');
    const [price, setPrice] = useState(props.adInfo?.price || 0);
    const [description, setDescription] = useState(props.adInfo?.description || '');
    const [category, setCategory] = useState(props.adInfo?.category || 'misc');
    const [images, setImages] = useState(props.adInfo?.images || []);
    const [location, setLocation] = useState(props.adInfo?.location || {});
    const [alertText, setAlertText] = useState(undefined);

    const handleSubmit = async () => {
        try {
            const data = { 
                title: title, 
                price: Number(price), 
                description: description, 
                category: category, 
                images: images,
                location: location, 
                date: new Date(), 
                user: props.user 
            };
            if (props.adInfo?._id) {
                data.id = props.adInfo._id;
            }
            const res = await fetch('http://localhost:5000/api/v1/ads/', {
                method: props.adInfo ? 'PUT' : 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const body = await res.json();
            if (body?.successful) {
                props.exit();
            } else {
                setAlertText('Action failed. Please try again later.');
            }
        } catch (err) {
            setAlertText('Action failed. Please try again later.');
        }
    };

    const updateLocation = (key, value) => {
        location[key] = value;
        setLocation(location);
    };

    const addImage = () => {
        images.push('');
        setImages([...images]);
    };
    
    const handleImageChanged = (e) => {
        images[e.target.key] = e.target.value;
    };

    const removeImage = (ind) => {
        setImages(images.filter((img, index) => index !== ind));
    }

    const imageJsx = images.map((img, ind) => (
        <InputGroup key={ind}>
            <InputGroup.Text>Image {ind}</InputGroup.Text>
            <Form.Control key={ind} placeholder="Paste image link here" aria-label="Default"
                aria-describedby="inputGroup-sizing-default" value={img} onChange={handleImageChanged} />
            <Button onClick={() => removeImage(ind)}>Delete</Button>
        </InputGroup>
    ));

    return (
        <Form>
            {alertText ? <Alert variant="danger">{alertText}</Alert> : null}
            <Row style={rowStyle}>
                <Col>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control placeholder="Enter a Title" onChange={(e) => setTitle(e.target.value)} defaultValue={title} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" onChange={(e) => setPrice(e.target.value)} defaultValue={price} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Select onChange={(e) => setCategory(e.target.value)} defaultValue={category}>
                            <option value="clothes">Clothes</option>
                            <option value="furniture">Furniture</option>
                            <option value="electronics">Electronics</option>
                            <option value="sporting-goods">Sporting Goods</option>
                            <option value="automobiles">Automobiles</option>
                            <option value="misc">Misc</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group style={rowStyle}>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" placeholder="Description here." onChange={(e) => setDescription(e.target.value)} defaultValue={description} />
            </Form.Group>
            <Row style={rowStyle}>
                <Col>
                    <Form.Label>Provice/Territory</Form.Label>
                    <Form.Select onChange={(e) => updateLocation('province', e.target.value)} defaultValue={location.province}>
                        <option value="AB">Alberta</option>
                        <option value="BC">British Columbia</option>
                        <option value="MB">Manitoba</option>
                        <option value="NB">New Brunswick</option>
                        <option value="NL">Newfoundland and Labrador</option>
                        <option value="NS">Nova Scotia</option>
                        <option value="ON">Ontario</option>
                        <option value="PE">Price Edward Island</option>
                        <option value="QC">Quebec</option>
                        <option value="SK">Saskatchewan</option>
                        <option value="NT">Northwest Territories</option>
                        <option value="NU">Nunavut</option>
                        <option value="YT">Yukon</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Label>City</Form.Label>
                    <Form.Control placeholder="Enter City" onChange={(e) => updateLocation('city', e.target.value)} defaultValue={location.city} />
                </Col>
                <Col>
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="Enter Address" onChange={(e) => updateLocation('address', e.target.value)} defaultValue={location.address} />
                </Col>
            </Row>
            <Form.Group style={rowStyle}>
                <Button onClick={addImage}>Add an image</Button>
                {imageJsx}
            </Form.Group>
            <Button style={rowStyle} onClick={handleSubmit}>Submit</Button>
        </Form>
    );
}

export default AdEditor;