import './App.css';
import { AlertBox } from './components/AlertBox/AlertBox';
import { AlertBoxTest } from './components/AlertBox/AlertBox.test';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';
import { ProductDisplayTest } from './components/ProductDisplay/ProductDisplay.test';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import { UserProfileTest } from './components/UserProfileCard/UserProfileCard.test';

const test: boolean = true;

function App() {
  const user = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Software Engineer',
    avatarUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.tR2Umw6O108_1cjdtEOb8QHaHT%3Fpid%3DApi&f=1&ipt=fbac7ec93521c3603bcff925465af286960dd4d965181dfb0295a5f534b19bfa&ipo=images'
  };
  const product = {
    id: '1',
    name: 'Wireless Headphones',
    price: 199.99,
    description: 'High-quality wireless headphones with noise cancellation.',
    imageUrl: '/src/assets/headphones.png',
    inStock: true
  };

  return (
    <div className="w-fit mx-auto p-4 bg-gray-100 border-2 border-gray-300">
      <AlertBox
        type="success"
        message="Your profile has been updated successfully!"
        onClose={() => alert('Alert closed')}
      >
        <p className="text-sm">You can now continue using the application.</p>
      </AlertBox>
      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={userId => alert(`Editing user ${userId}`)}
      >
        <div className="text-sm text-gray-500">Last login: 2 hours ago</div>
      </UserProfileCard>
      <ProductDisplay
        product={product}
        showDescription={true}
        showStockStatus={true}
        onAddToCart={productId => alert(`Added product ${productId} to cart`)}
      >
        <div className="text-sm text-gray-500">Free shipping available</div>
      </ProductDisplay>
      {test && (
        <div className="m-5">
          <AlertBoxTest />
          <ProductDisplayTest />
          <UserProfileTest />
        </div>
      )}
    </div>
  );
}

export default App;
