import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AdEditor(props) {

    return (
        <Form>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control placeholder="Enter a Title"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control type="number"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" placeholder="Description here."></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Select>
                    <option value="any">Any</option>
                    <option value="clothes">Clothes</option>
                    <option value="furniture">Furniture</option>
                    <option value="electronics">Electronics</option>
                    <option value="sporting-goods">Sporting Goods</option>
                    <option value="automobiles">Automobiles</option>
                    <option value="misc">Misc</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Provice/Territory</Form.Label>
                <Form.Select>
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
                <Form.Label>City</Form.Label>
                <Form.Control placeholder="Enter City"></Form.Control>
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="Enter Address"></Form.Control>
            </Form.Group>
            <Button>Submit</Button>
        </Form>
    );
}

export default AdEditor;