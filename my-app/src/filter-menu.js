import React from 'react';
import Form from 'react-bootstrap/Form'

function FilterMenu(props) {
    const labelStyle = { margin: '20px 0px 0px 0px' };

    const handleChange = (event) => {
        props.updateFilter(event.target.name, event.target.value);
    }

    return (
        <Form className="filter-menu" style={{margin: '10px'}}>
            <label htmlFor="category" style={labelStyle}>Category</label>
            <Form.Select id="category" name="category" onChange={handleChange}>
                <option value="any">Any</option>
                <option value="clothes">Clothes</option>
                <option value="furniture">Furniture</option>
                <option value="electronics">Electronics</option>
                <option value="sporting-goods">Sporting Goods</option>
                <option value="automobiles">Automobiles</option>
                <option value="misc">Misc</option>
            </Form.Select>
            <label htmlFor="priceMin" style={labelStyle}>Price Min</label>
            <Form.Control type="number" id="priceMin" name="priceMin" min="0" max="999999" onChange={handleChange} />
            <label htmlFor="price-max" style={labelStyle}>Price Max</label>
            <Form.Control type="number" id="priceMax" name="priceMax" min="0" max="999999" onChange={handleChange} />
            <label htmlFor="sort" style={labelStyle}>Sort By</label>
            <Form.Select id="sort" name="sort" onChange={handleChange}>
                <option value="age-new">Age: New to Old</option>
                <option value="age-old">Age: Old to New</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
            </Form.Select>
        </Form>
    );
}

export default FilterMenu;