import React from "react";

import Swal from "sweetalert2";
import { useDeleteProductByIdMutation,  useGetProductQuery, } from "../../../redux/service/serviceApi";

const AdminProducts = () => {
  const { data, refetch } = useGetProductQuery();

  const [deleteProductById] = useDeleteProductByIdMutation();
  const handleDelete =   (productId) => {
 try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) =>  {
      if (result.isConfirmed)  {
          await deleteProductById(productId);
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Ingredients</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.data.map((product) => (
              <tr key={product._id}>
                <td>
                  <img
                    src={product.imgUrl}
                    alt={product.title}
                    style={{ width: "100px", height: "100px" }}
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.ingredient}</td>
                <td>${product.price}</td>

                <td>
                  <button
                    onClick={() => {
                      handleDelete(product._id);
                    }}
                    style={{
                      backgroundColor: "#ff4d4d",
                      color: "white",
                      padding: "10px 15px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;
