import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'isAuth',
  initialState: {
    isAuth: false,
  },
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload
    },
  },
})

export const { setIsAuth } = authSlice.actions;

export default authSlice.reducer;