function FilterMenu(props) {
    // TODO: use state hook and add onChanges

    return (
        <div class="FilterMenu">
            <label for="category">Category</label>
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
            <label for="price-min">Price Min</label>
            <input type="number" id="price-min" name="price-min" min="0" max="999999" />
            <label for="price-max">Price Max</label>
            <input type="number" id="price-max" name="price-max" min="0" max="999999" />
            <label for="sort">Sort By</label>
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