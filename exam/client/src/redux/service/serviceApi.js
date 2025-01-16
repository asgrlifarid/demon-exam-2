import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/' }),
    endpoints: (builder) => ({
        getProduct: builder.query({ query: () => `products` }),
        getProductById: builder.query({ query: (id) => `products/${id}` }),
        deleteProductById: builder.mutation({
            query: (id) => ({
                url: `products/${id}`,
                method: "DELETE",
            }),
        }),
        postNewProduct: builder.mutation({
            query: (payload) => ({
                url: `products`,
                method: "POST",
                body: payload,
            })
        })
    }),
})

export const { useGetProductQuery,
    useDeleteProductByIdMutation,
    useGetProductByIdQuery,
    usePostNewProductMutation } = productApi