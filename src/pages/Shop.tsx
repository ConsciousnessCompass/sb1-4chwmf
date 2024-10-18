import React, { useState } from 'react';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import SupportUs from '../components/SupportUs';

const Shop: React.FC = () => {
  const [cart, setCart] = useState<{ id: number; name: string; price: number; quantity: number }[]>([]);

  const products = [
    { id: 1, name: "Consciousness Explorer's Journal", price: 24.99, type: "physical" },
    { id: 2, name: "Meditation Mastery Course", price: 49.99, type: "digital" },
    { id: 3, name: "Brain Wave Entrainment Audio Set", price: 34.99, type: "digital" },
    { id: 4, name: "Lucid Dreaming Guidebook", price: 19.99, type: "physical" },
  ];

  const addToCart = (product: { id: number; name: string; price: number }) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, change: number) => {
    setCart(prevCart => prevCart.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + change);
        return newQuantity === 0 ? null : { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(Boolean) as { id: number; name: string; price: number; quantity: number }[]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Shop</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={`https://source.unsplash.com/random/800x600?${product.name.toLowerCase().replace(/\s/g, '-')}`} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
              <span className="text-sm text-purple-600 mb-4 block">{product.type === 'digital' ? 'Digital Download' : 'Physical Product'}</span>
              <button
                onClick={() => addToCart(product)}
                className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300 flex items-center justify-center"
              >
                <ShoppingCart className="mr-2" size={20} />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4 pb-4 border-b">
              <span>{item.name}</span>
              <div className="flex items-center">
                <button onClick={() => updateQuantity(item.id, -1)} className="p-1 bg-gray-200 rounded-full mr-2">
                  <Minus size={16} />
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)} className="p-1 bg-gray-200 rounded-full mr-4">
                  <Plus size={16} />
                </button>
                <span className="mr-4">${(item.price * item.quantity).toFixed(2)}</span>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center font-semibold">
              <span>Total:</span>
              <span>${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
            </div>
          </div>
          <button className="mt-6 w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300">
            Proceed to Checkout
          </button>
        </div>
      )}

      <SupportUs />
    </div>
  );
};

export default Shop;