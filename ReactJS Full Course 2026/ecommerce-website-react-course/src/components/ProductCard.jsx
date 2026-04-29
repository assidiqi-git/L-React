import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, cartItems } = useCart();
  const productInCartQuantity = cartItems.find(
    (item) => item.id === product.id,
  );

  const productLabelQuantity = productInCartQuantity
    ? `(${productInCartQuantity.quantity})`
    : "";

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-card-image"
      />
      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">${product.price}</p>
        <div className="product-card-actions">
          <Link className="btn btn-primary" to={`/product/${product.id}`}>
            View Detail
          </Link>
          <button
            className="btn btn-secondary"
            onClick={() => addToCart(product.id)}
          >
            Add to card {productLabelQuantity}
          </button>
        </div>
      </div>
    </div>
  );
}
