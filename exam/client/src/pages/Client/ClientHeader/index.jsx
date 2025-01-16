import React from "react";
import { NavLink } from "react-router"
import styles from "./index.module.scss"
import { useSelector } from "react-redux";
const ClientHeader = () => {
  const wishlist = useSelector((state)=>(state.wishlist))
  return (
    <header>
      <div  className={styles.tastyDiv} >
        <p className={styles.tasty}> T a s t y </p>
      </div>
      <div className={styles.navigate}>
        <nav>
          <ul>
          
            <li>
              <NavLink
                to="/wishlist"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Wishlist<sup>{wishlist?.items.length}</sup>
              </NavLink>
            </li>
           
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default ClientHeader;
