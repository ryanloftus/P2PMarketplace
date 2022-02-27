import Form from 'react-bootstrap/Form'

function FilterMenu(props) {
    // TODO: use state hook and add onChanges

    const labelStyle = { margin: '20px 0px 0px 0px' };

    return (
        <Form className="filter-menu" style={{margin: '10px'}}>
            <label htmlFor="category" style={labelStyle}>Category</label>
            <Form.Select id="category" name="category">
                <option value="any">Any</option>
                <option value="clothes">Clothes</option>
                <option value="furniture">Furniture</option>
                <option value="appliances">Appliances</option>
                <option value="electronics">Electronics</option>
                <option value="sporting-goods">Sporting Goods</option>
                <option value="real-estate">Real Estate</option>
                <option value="automobiles">Automobiles</option>
                <option value="misc">Misc</option>
            </Form.Select>
            <label htmlFor="priceMin" style={labelStyle}>Price Min</label>
            <Form.Control type="number" id="priceMin" name="priceMin" min="0" max="999999" />
            <label htmlFor="price-max" style={labelStyle}>Price Max</label>
            <Form.Control type="number" id="priceMax" name="priceMax" min="0" max="999999" />
            <label htmlFor="sort" style={labelStyle}>Sort By</label>
            <Form.Select id="sort" name="sort">
                <option value="age-new">Age: New to Old</option>
                <option value="age-old">Age: Old to New</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
            </Form.Select>
        </Form>
    );
}

export default FilterMenu;