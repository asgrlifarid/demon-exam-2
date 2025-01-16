import React from "react";
import { useGetProductQuery } from "../../../redux/service/serviceApi";
import styles from "./index.module.scss";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorites } from "../../../redux/features/wishlistSlice";

const ClientProducts = () => {
  const { data, isLoading, isError, refetch } = useGetProductQuery();
  const wishlist = useSelector((state)=>state.wishlist);
  const dispatch = useDispatch();
  return (
    <div className={styles.firstDiv}>
      {isLoading && <h1>Loading ... </h1>}
      {isError && <h1>You Have a Big PROBLEM ...! </h1>}
      {data &&
        data.data.map((p) => (
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
                {wishlist?.items.find((q) => q._id === p._id) ? (
                  <FaHeart />
                ) : (
                  <CiHeart />
                )}
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ClientProducts;
