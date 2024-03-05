import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books"

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/",
    }),
    getSingleBook: builder.query({
      query: (bookId) => `${bookId}`
    })
  })
})

export const { useGetBooksQuery, useGetSingleBookQuery } = booksApi