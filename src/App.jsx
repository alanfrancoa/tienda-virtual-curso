import React from 'react';
import { DarkModeProvider } from './components/context/DarkModeProvider';
import { CartProvider } from './components/context/CartContext';
import AppContent from './components/AppContent/AppContent';

function App() {
return (

  <DarkModeProvider>
    <CartProvider>
      <AppContent />
    </CartProvider>
  </DarkModeProvider>

)
}
export default App
