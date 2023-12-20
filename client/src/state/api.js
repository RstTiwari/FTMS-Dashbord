import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl:process.env.REACT_APP_URL }),
    reducerPath: "adminApi",
    tagTypes: ["User","Client","Coustomers","Transaction"],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"],
        }),
        getProducts:build.query({
            query:()=> `client/products`,
            providesTags:["Client"]
        }),
        getCoustomers:build.query({
          query:()=> "client/coustomers",
          providesTags:["Coustomers"]
        }),
        getTransaction :build.query ({
          query:({page,pageSize,sort,search})=>({
               url:"client/transaction",
               method:"POST",
               params:{page,pageSize,sort,search},
               headers:{},
               providesTags:["Transaction"]
          })
        })
    }),
});




export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCoustomersQuery,
  useGetTransactionQuery,
} = api;
