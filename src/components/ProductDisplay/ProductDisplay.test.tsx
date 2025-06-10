import { ProductDisplay } from './ProductDisplay';

export function ProductDisplayTest() {
  const product = {
    id: '1',
    name: 'Wireless Headphones',
    price: 199.99,
    description: 'High-quality wireless headphones with noise cancellation.',
    imageUrl: 'https://example.com/headphones.jpg',
    inStock: true
  };
  const product2 = {
    id: '2',
    name: 'Ugly Headphones',
    price: 9.99,
    description: 'Really cheap headphones, so shut up and buy them.',
    inStock: false
  };

  return (
    <>
      <ProductDisplay
        product={product}
        showDescription={true}
        showStockStatus={true}
        onAddToCart={productId => alert(`Added product ${productId} to cart`)}
      >
        <div className="text-sm text-gray-500">Free shipping available</div>
      </ProductDisplay>{' '}
      <ProductDisplay
        product={product2}
        showDescription={true}
        showStockStatus={true}
        onAddToCart={productId =>
          alert(`Added crappy product ${productId} to cart`)
        }
      >
        <div className="text-sm text-gray-500">$200 shipping available</div>
      </ProductDisplay>
    </>
  );
}

ProductDisplayTest();
