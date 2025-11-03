import { useState } from 'react'
import './App.css'
import { AlertBox } from './components/AlertBox/AlertBox'
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay'
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard'
import type { Product } from './types'
import type { User } from './types'

function App() {

  const user: User= {
    id: "1",
    name: "Ayaan",
    email: "ayaanakbar08@gmail.com",
    role: "Software Engineer",
    avatarUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  }
  const product: Product= {
    id:"1",
    name:"Wireless Headphones",
    price: 199,
    description:"High-quality wireless headphones with noise cancellation.",
    inStock: true,
    imageUrl: "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000"
  }
const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);
 
  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
  };
 
  return (
    <div className="p-4">
      {showAlert && (
        <AlertBox
          type="success"
          message="Product added to cart!"
          onClose={() => setShowAlert(false)}
        />
      )}
 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
        />
 
        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
}

export default App
