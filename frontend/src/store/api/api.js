import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9095/api" }),
    endpoints(builder) {
        return {
            registerUser: builder.mutation({
                query: (formData) => {
                    return {
                        url: '/register',
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: formData
                    }
                }
            }),
            getUser: builder.query({
                query: (token) => {
                    return {
                        url: '/user',
                        method: "GET",
                        headers: {
                            'x-auth-token': token
                        }
                    }
                }
            }),
            loginUser: builder.mutation({
                query: (formData) => {
                    return {
                        url: '/login',
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: formData
                    }
                }
            }),

        }
    }
})

export const { useGetUserQuery, useLoginUserMutation, useRegisterUserMutation } = api;