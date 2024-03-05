import { configureStore } from '@reduxjs/toolkit'
import { booksApi } from "../API/accountSlice"

export const store = configureStore({
  reducer: {
    booksApi: booksApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(booksApi.middleware)
})