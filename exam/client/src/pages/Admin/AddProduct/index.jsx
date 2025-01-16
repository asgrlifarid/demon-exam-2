import React from "react";
import { useFormik } from "formik";
import { usePostNewProductMutation } from "../../../redux/service/serviceApi";
import { AddProductSchema } from "../../../validations/validationFormik";
import Swal from "sweetalert2";
import styles from "./index.module.scss"

export const AddProduct = () => {
    const [ postNewProduct ] = usePostNewProductMutation();
  const formik = useFormik({
    initialValues: {
      title: "",
      ingredient: "",
      category: "",
      imgUrl: "",
      price: ""
    },
    validationSchema: AddProductSchema ,
    onSubmit: async (values) => {
      try {
        await postNewProduct(values);
        Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true
          });
          formik.resetForm();
      } catch (error) {
        console.log(error);
        
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}  className={styles.form}>
      <label htmlFor="title"> Title </label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      {formik.errors.title && formik.touched.title && (
        <p className={styles.error} style={{ color: "red", marginBottom: 15 }}>
          {formik.errors.title}
        </p>
      )}
      <label htmlFor="ingredient">ingredient</label>
      <input
        id="ingredient"
        name="ingredient"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.ingredient}
      />
      {formik.errors.ingredient && formik.touched.ingredient && (
        <p className={styles.error} style={{ color: "red", marginBottom: 15 }}>
          {formik.errors.ingredient}
        </p>
      )}
      <label htmlFor="category">Category</label>
      <input
        id="category"
        name="category"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.category}
      />
       {formik.errors.category && formik.touched.category && (
        <p className={styles.error} style={{ color: "red", marginBottom: 15 }}>
          {formik.errors.category}
        </p>
      )}

      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.price}
      />
      {formik.errors.price && formik.touched.price && (
        <p className={styles.error} style={{ color: "red", marginBottom: 15 }}>
          {formik.errors.price}
        </p>
      )}
      <label htmlFor="imgUrl">image Url</label>
      <input
        id="imgUrl"
        name="imgUrl"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.imgUrl}
      />
      {formik.errors.imgUrl && formik.touched.imgUrl && (
        <p className={styles.error} style={{ color: "red", marginBottom: 15 }}>
          {formik.errors.imgUrl}
        </p>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};
