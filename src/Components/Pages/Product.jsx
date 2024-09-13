import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const Params = useParams();
  const ProductId = Params.product;
  const [productNotFound, setProductNotFound] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${ProductId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => setProductNotFound(true));
  }, []);

  if (Object.keys(product).length === 0) {
    if (productNotFound) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#af92db]">
          <i className="fa-solid fa-triangle-exclamation text-3xl font-bold text-gray-900"></i>
          <p className="text-3xl font-bold text-gray-900">Product Not Found</p>
        </div>
      );
    }
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-row  justify-center min-h-screen bg-[#af92db]">
      <div className="bg-[#9167d1] m-10 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-center">
        <div className="w-1/3">
          <img className="w-full h-96 rounded-2xl" src={product.image} alt={product.title} />
        </div>
        <div className="w-2/3 p-5">
          <h1 className="text-3xl font-bold text-white">{product.title}</h1>
          <p className="text-white">{product.description}</p>
          <p className="text-3xl font-bold text-white">${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
