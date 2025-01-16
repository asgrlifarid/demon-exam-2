import React from "react";

import { NavLink } from "react-router"

const AdminHeader = () => {
    
  return (
    <header>
      <div >
        <p > T a s t y </p>
      </div>
      <div >
        <nav>
          <ul>
          <li>
              <NavLink
                to="/admin"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/addproduct"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Add Product
              </NavLink>
            </li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
