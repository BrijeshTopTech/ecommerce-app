import "./Product.css";
import { products } from "../../data.js";
import ProductItem from "./ProductItem.jsx";

export default function Product(props) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="products-section-heading mb-6 text-3xl text-black-900 text-center">
          <hr />
          {props.subcategory}
          <hr />
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((item, index) =>
            props.category !== "" &&
            props.subcategory.slug !== "" &&
            item.category.slug === props.category &&
            item.subCategory.slug === props.subcategory ? (
              <ProductItem
                title={item.title}
                thumbnail={item.thumbnail}
                brand={item.brand}
                price={item.currentPrice}
                originalPrice={item.originalPrice}
                discount={item.discount}
                key={index}
                id={item.id}
              />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
}
