'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Paginate } from '@/components/uicomponents/Paginate';

export const Product = () => {
  const [products, setProducts] = useState([]); // All products
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products
  const [activePage, setActivePage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');
  const limit = 9; // Number of items per page

  // Fetch all products initially
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/products`);
      if (!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      setProducts(data.records); // Save all products
      setFilteredProducts(data.records); // Initially, all products are shown
    } catch (error) {
      // console.error(error);
      setProducts([]);
      setFilteredProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // Apply search and filter logic
  const applySearchAndFilter = () => {
    let tempProducts = [...products];

    // Apply search
    if (searchQuery) {
      tempProducts = tempProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // Apply filter
    if (filter) {
      tempProducts = tempProducts.filter((product) => {
        const price = parseInt(product.price.replace(/[^0-9]/g, ''), 10);
        if (filter === 'low') return price < 50000;
        if (filter === 'medium') return price >= 50000 && price <= 70000;
        if (filter === 'high') return price > 70000;
        return true;
      });
    }

    setFilteredProducts(tempProducts);
    setActivePage(1); // Reset to page 1 after filtering
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    applySearchAndFilter();
  }, [searchQuery, filter]);

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const paginatedProducts = filteredProducts.slice(
    (activePage - 1) * limit,
    activePage * limit,
  );

  if (loading) {
    return <div className='h-screen text-center text-3xl'>Loading...</div>;
  }

  return (
    <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 mx-auto'>
      <div className='max-w-2xl mx-auto text-center mb-10 lg:mb-14'>
        <h2 className='text-2xl font-bold md:text-4xl md:leading-tight '>
          Our Models
        </h2>
        <p className='mt-1 text-gray-600 '>
          Explore our range of cutting-edge electric vehicles.
        </p>
      </div>

      {/* Search Bar */}
      <div className='mb-6 text-center bg-white'>
        <input
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full p-3 border rounded-lg bg-white '
          placeholder='Search for a model...'
        />
      </div>

      {/* Filter Dropdown */}
      <div className='mb-6 text-center bg-white'>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className='p-3 border rounded-lg bg-white'
        >
          <option value=''>Filter by price</option>
          <option value='low'>Under $50,000</option>
          <option value='medium'>$50,000 - $70,000</option>
          <option value='high'>Above $70,000</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {paginatedProducts.map((product) => (
          <Link
            key={product.id} // Use unique product ID
            href={`/models/${product.id}`} // Properly link to the dynamic route
            className='group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition duration-300 rounded-xl p-5 '
          >
            <div className='aspect-w-16 aspect-h-11'>
              <img
                className='w-full object-cover rounded-xl'
                src={product.imageUrl}
                alt={product.title}
              />
            </div>
            <div className='my-6'>
              <h3 className='text-xl font-semibold text-gray-800 '>
                {product.title}
              </h3>
              <p className='mt-5 text-gray-600 '>{product.description}</p>
              <p className='mt-3 text-lg font-semibold text-gray-900 '>
                {product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className='flex justify-center py-4'>
        <Paginate
          total={filteredProducts.length}
          limit={limit}
          activePage={activePage}
          handleClick={handlePageChange}
        />
      </div>
    </div>
  );
};
