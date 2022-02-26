function FilterMenu(props) {
    // TODO: use state hook and add onChanges

    return (
        <div className="filter-menu">
            <label className="filter-label" htmlFor="category">Category</label>
            <br />
            <select id="category" name="category">
                <option value="any">Any</option>
                <option value="clothes">Clothes</option>
                <option value="furniture">Furniture</option>
                <option value="appliances">Appliances</option>
                <option value="electronics">Electronics</option>
                <option value="sporting-goods">Sporting Goods</option>
                <option value="real-estate">Real Estate</option>
                <option value="automobiles">Automobiles</option>
                <option value="misc">Misc</option>
            </select>
            <br />
            <label className="filter-label" htmlFor="price-min">Price Min</label>
            <br />
            <input type="number" id="price-min" name="price-min" min="0" max="999999" />
            <br />
            <label className="filter-label" htmlFor="price-max">Price Max</label>
            <br />
            <input type="number" id="price-max" name="price-max" min="0" max="999999" />
            <br />
            <label className="filter-label" htmlFor="sort">Sort By</label>
            <br />
            <select id="sort" name="sort">
                <option value="age-new">Age: New to Old</option>
                <option value="age-old">Age: Old to New</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
            </select>
        </div>
    );
}

export default FilterMenu;