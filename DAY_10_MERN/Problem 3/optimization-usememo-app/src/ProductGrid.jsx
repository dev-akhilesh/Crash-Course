import React, { useState, useEffect, useMemo } from 'react';
import './styles.css';

const ProductGrid = () => {
    const [products, setProducts] = useState([]);
    const [sortBy, setSortBy] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            });
    }, []);

    const filterProducts = useMemo(() => {
        const filterFn = (items, term, category, sort) => {
            let filtered = [...items];

            // Filter by search term
            if (term) {
                filtered = filtered.filter(product =>
                    product.title.toLowerCase().includes(term.toLowerCase())
                );
            }

            // Filter by category
            if (category) {
                filtered = filtered.filter(product => product.category === category);
            }

            // Sort by price
            if (sort === 'lowToHigh') {
                filtered.sort((a, b) => a.price - b.price);
            } else if (sort === 'highToLow') {
                filtered.sort((a, b) => b.price - a.price);
            }

            return filtered;
        };

        return filterFn;
    }, []);

    const filteredProducts = useMemo(() => filterProducts(products, searchTerm, selectedCategory, sortBy), [products, sortBy, selectedCategory, filterProducts, searchTerm]);

    const handleSortChange = e => {
        setSortBy(e.target.value);
    };

    const handleCategoryChange = e => {
        setSelectedCategory(e.target.value);
    };

    const handleSearch = useMemo(() => {
        const debounce = (func, delay) => {
            let timeoutId;
            return function (...args) {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    func.apply(this, args);
                }, delay);
            };
        };

        return debounce(value => setSearchTerm(value), 300);
    }, []);

    const truncateDescription = (description, maxLength) => {
        if (description.length <= maxLength) return description;
        return `${description.substring(0, maxLength)}...`;
    };

    return (
        <div className="product-grid-container">
            <div className="filters">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={e => handleSearch(e.target.value)}
                    className="search-input"
                />
                <select value={selectedCategory} onChange={handleCategoryChange} className="category-select">
                    <option value="">All Categories</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelry</option>
                </select>
                <select value={sortBy} onChange={handleSortChange} className="sort-select">
                    <option value="">Sort by</option>
                    <option value="lowToHigh">Price: Low to High</option>
                    <option value="highToLow">Price: High to Low</option>
                </select>
            </div>
            <div className="product-grid">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} className="product-image" />
                        <div className="product-details">
                            <h3 className="product-title">{product.title}</h3>
                            <p className="product-price">${product.price}</p>
                            <p className="product-description">{truncateDescription(product.description, 100)}</p>
                            <p className="product-category">Category: {product.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;
