import React from 'react'
import { Link } from 'react-router-dom';

export function Card( props ) {
  const { Key, Name, Price, Category, Image } = props || {};

  return (
    <Link to={`/product?key=${Key}`}>
    <div>
        <img
          src={Image}
          alt="product"
        />
        <h3>{Name}</h3>
        <p>{Price}</p>
        <p>{Category}</p>
    </div>
    </Link>
  )
}

export default Card
