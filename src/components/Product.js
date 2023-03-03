import React from "react";
import "D:/DStudies/Sem-6/Project-2/project-2/src/components/CSS/Proudct.css";
function Product({ id, title, image }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
      </div>
      <img src={image} alt="" />
    </div>
  );
}

export default Product;
