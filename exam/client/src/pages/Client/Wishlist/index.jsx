import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./index.module.scss";
import { toggleFavorites } from '../../../redux/features/wishlistSlice';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const Wishlist = () => {

    const dispatch =useDispatch();
    const wishlist = useSelector((state) => {
        return state.wishlist.items
    })
    console.log(wishlist);
    
  return (
    <div className={styles.firstDiv}>
      
         {wishlist &&
           wishlist.map((p) => (
             <div key={p._id} className={styles.card}>
               <div className={styles.left}>
                 <div className={styles.imagee}>
                   <img src={p.imgUrl} alt={p.title} width={100} height={100} />
                 </div>
               </div>
               <div className={styles.right}>
                 <div className={styles.upper}>
                   {" "}
                   <h3>{p.title}</h3>
                 </div>
                 <div className={styles.lower}>
                   {" "}
                   <p>{p.ingredient}</p>
                 </div>
               </div>
               <div className={styles.pricee}>
                 <p>${p.price}</p>
   
                 <button
                   onClick={() => {
                     dispatch(toggleFavorites(p));
                   }}
                 >
                   {wishlist?.find((q) => q._id === p._id) ? (
                     <FaHeart />
                   ) : (
                     <CiHeart />
                   )}
                 </button>
               </div>
             </div>
           ))}
       </div>
  )
}

export default Wishlist