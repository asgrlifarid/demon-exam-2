import React, { useEffect, useState } from "react";
import { useGetProductQuery } from "../../../redux/service/serviceApi";
import styles from "./index.module.scss";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorites } from "../../../redux/features/wishlistSlice";

const ClientProducts = () => {
  const { data, isLoading, isError } = useGetProductQuery();
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const [filtered, setFiltered] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    if (data?.data) {
      setFiltered(data.data); 
    }
  }, [data]);

  const handleChange = (e) => {
    const sortOrder = e.target.value;
    let sortedProds = [...filtered]; 

    if (sortOrder === "asc") {
      sortedProds.sort((a, b) => a.title.localeCompare(b.title)); 
    } else if (sortOrder === "desc") {
      sortedProds.sort((a, b) => b.title.localeCompare(a.title)); 
    } else if (sortOrder === "default") {
     
      setFiltered(data.data);
      return;
    }

    setFiltered(sortedProds); 
  };


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); 
  };

  const filteredProducts = filtered.filter(
    (product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

  return (
    <div className={styles.firstDiv}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange} 
        className={styles.searchInput}
      />

      <select onChange={handleChange}>
        <option value="default">DEFAULT</option>
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select>

      {isLoading && <h1>Loading ...</h1>}
      {isError && <h1>You Have a Big PROBLEM ...!</h1>}

      {filteredProducts.map((p) => (
        <div key={p._id} className={styles.card}>
          <div className={styles.left}>
            <div className={styles.imagee}>
              <img src={p.imgUrl} alt={p.title} width={100} height={100} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.upper}>
              <h3>{p.title}</h3>
            </div>
            <div className={styles.lower}>
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
