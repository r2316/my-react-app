import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import prdts from './productsdata';

export default function ProductDetails() {
  let params = useParams();
  let pid = parseInt(params.pid);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    let p = prdts.find((p) => p.id === pid);
    setProduct(p);
  }, [pid]);

  if (!product) {
    return <div className="text-center mt-10 text-xl text-gray-600">Loading...</div>;
  }

  // Function to render stars based on rating
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'text-yellow-500' : 'text-gray-300'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="max-w-6xl mx-auto mt-16 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row p-8">
      
      {/* Left side for additional images */}
      <div className="flex flex-col md:w-1/4 space-y-4 mb-8 md:mb-0">
        {product.additionalImages && product.additionalImages.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`Additional image ${index + 1}`} 
            className="w-32 h-32 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>

      {/* Main Image Section */}
      <div className="flex-1 md:w-2/3 ">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-auto object-cover rounded-lg shadow-xl transition-transform transform hover:scale-105"
        />
      </div>

      {/* Product Details Section */}
      <div className="flex-1 md:w-2/3 p-6">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">{product.name}</h3>
        <p className="text-lg font-medium text-gray-600 mb-3">{product.brand}</p>
        
        {/* Rating Section */}
        <div className="mb-4 flex items-center">
          <div className="flex">{renderStars(product.rating)}</div> 
          <p className="ml-2 text-gray-500 text-lg">{product.rating} / 5</p> 
        </div>

        <div className="flex items-center mb-4">
          <p className="text-2xl font-bold text-green-600 mr-4">{product.originalprice}</p>
          {product.originalprice !== product.discountedprice && (
            <p className="text-xl text-gray-500 line-through">{product.discountedprice}</p>
          )}
        </div>
        
        <p className="text-gray-700 text-lg mb-6">{product.des}</p>

        <h4 className="font-semibold text-gray-800 mt-6 text-xl">Key Features:</h4>
        <ul className="list-disc pl-6 text-gray-700 text-lg">
          {product.keyfeatures.map((feature, index) => (
            <li key={index} className="mb-2">{feature}</li>
          ))}
        </ul>

        {/* Product Additional Details */}
        <div className="mt-6 text-gray-700">
          <p><strong>Model Number:</strong> {product.modelno}</p>
          <p><strong>Title:</strong> {product.title}</p>
          <p><strong>Weight:</strong> {product.weight}</p>
          <p><strong>Dimensions:</strong> {product.dimensions}</p>
          <p><strong>Type:</strong> {product.type}</p>
          <p><strong>Model Series:</strong> {product.modelseries}</p>
          <p><strong>Color Options:</strong> {product.coloroptions.join(', ')}</p>
        </div>
      </div>
    </div>
  );
}
