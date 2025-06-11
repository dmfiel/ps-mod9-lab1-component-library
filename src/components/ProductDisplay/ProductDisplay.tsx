import type { ProductDisplayProps } from '../../types/index';

// Show a customizable product display card
// product passes in all the relevant cotalog details (name, price, etc.)
// showDescription controls if the item description is shown
// showStockStatus controls if the item's stock status is shown
// onAddToCart is the add button's event handler
// children passes through any child elements

export function ProductDisplay({
  product,
  showDescription,
  showStockStatus,
  onAddToCart,
  children
}: ProductDisplayProps) {
  return (
    <article className="border border-gray-300 shadow-md rounded-lg items-center m-0 p-0 bg-white w-fit">
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          height="50px"
          width="100%"
          className="w-full m-0 p-0 rounded-t-lg"
        />
      )}
      <div className="text-center p-5">
        <h2 className="text-xl font-bold mb-3">{product.name}</h2>
        <h2 className="text-xl font-bold mb-3 text-blue-500">
          ${product.price.toFixed(2)}
        </h2>
        <h3 className="text-lg font-medium">
          {showDescription ? product.description : ''}
        </h3>

        {showStockStatus ? (
          product.inStock ? (
            <h4 className="text-green-700">In Stock</h4>
          ) : (
            <h4 className="text-red-700">Out of Stock</h4>
          )
        ) : (
          ''
        )}

        {onAddToCart && (
          <button
            id="addToCart"
            onClick={() => onAddToCart(product.name)}
            className="border rounded-md p-1 my-2 mx-auto bg-blue-600 text-white w-full"
          >
            Add To Cart
          </button>
        )}
        {children}
      </div>
    </article>
  );
}
