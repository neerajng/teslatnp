'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/products/${id}`);
        if (!response.ok) throw new Error('Failed to fetch product details');
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        // console.error(error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className='h-screen text-center text-3xl'>Loading...</div>;
  }

  if (!product) {
    return (
      <div className='h-screen text-center text-3xl'>Product not found</div>
    );
  }

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const currentImage = selectedColor
    ? product.colorVariants[selectedColor]
    : product.imageUrl; // Use the selected color's image, or fallback to the default image

  return (
    <div className='w-[90%] py-4 mx-auto mt-20 bg-gray-100 rounded flex flex-col md:flex-row md:justify-between h-auto mb-12'>
      <div className='md:w-[60%] w-full px-2'>
        <h1 className='text-3xl font-bold break-all'>{product.title}</h1>
        <img
          src={currentImage}
          alt={product.title}
          className='w-full max-w-md mt-5 rounded-lg '
        />
        <p className='mt-5 text-gray-600 dark:text-neutral-400 break-all'>
          {product.description}
        </p>
        <p className='text-lg font-semibold text-gray-900 dark:text-white break-all'>
          {product.price}
        </p>

        {/* Display Variants and Configurations */}
        <div className='mt-2'>
          <h4 className='font-semibold text-gray-800 dark:text-neutral-300 break-all'>
            Available Variants:
          </h4>
          <ul className='list-disc pl-5 break-all'>
            {product.variants.map((variant, idx) => (
              <li key={idx} className='text-gray-600 dark:text-neutral-400'>
                {variant}
              </li>
            ))}
          </ul>

          <h4 className='font-semibold text-gray-800 dark:text-neutral-300 mt-2 break-all'>
            Available Configurations:
          </h4>
          <ul className='list-disc pl-5 break-all'>
            {product.configurations.map((config, idx) => (
              <li key={idx} className='text-gray-600 dark:text-neutral-400'>
                {config}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='md:w-[40%] flex flex-col'>
        <h4 className='font-semibold text-gray-800 dark:text-neutral-300'>
          Select Variant (Color)
        </h4>

        <div className='mt-3 flex space-x-4'>
          {/* Black Color Option */}
          <button
            onClick={() => handleColorChange('black')}
            className={`w-8 h-8 rounded-full bg-black ${
              selectedColor === 'black' ? 'border-4 border-yellow-200' : ''
            }`}
          ></button>

          {/* Blue Color Option */}
          <button
            onClick={() => handleColorChange('blue')}
            className={`w-8 h-8 rounded-full bg-blue-500 ${
              selectedColor === 'blue' ? 'border-4 border-yellow-200' : ''
            }`}
          ></button>

          {/* Red Color Option */}
          <button
            onClick={() => handleColorChange('red')}
            className={`w-8 h-8 rounded-full bg-red-500 ${
              selectedColor === 'red' ? 'border-4 border-yellow-200' : ''
            }`}
          ></button>
        </div>

        {/* Display selected color */}
        <p className='mt-4 text-lg text-gray-800 dark:text-neutral-300'>
          Selected Color:{' '}
          <span className='font-semibold'>
            {selectedColor
              ? selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)
              : 'None'}
          </span>
        </p>

        {/* Build and Price Button */}
        <div className='w-auto pe-12 h-auto flex flex-col mt-6'>
          <a
            href={`/design/${id}`} // Adjust the URL to your customization page
            className='rounded-md bg-red-600 p-2 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
          >
            Build and Price
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
