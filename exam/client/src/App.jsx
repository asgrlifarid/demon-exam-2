import { useState } from 'react'
import {  Routes, Route } from "react-router-dom";
import './App.css'
import ClientLayout from './layout/ClientLayout';
import Home from './pages/Client/Home';
import AdminLayout from './layout/AdminLayout';
import AdminProducts from './pages/Admin/AdminProducts';
import { AddProduct } from './pages/Admin/AddProduct/INDEX.JSX';
import Wishlist from './pages/Client/Wishlist';

function App() {


  return (
    <>
        <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
        
          {/* <Route path="/:id" element={<ProductDetail />} /> */}
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminProducts />} />
          <Route path="/admin/addproduct" element={< AddProduct/>} />
        </Route>
        
      </Routes>
    </>
  )
}

export default App
