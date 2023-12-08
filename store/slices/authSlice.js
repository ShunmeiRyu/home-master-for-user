const { createSlice } = require("@reduxjs/toolkit")

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userEmail: null
  },
  reducers: {
    setUserEmail: (state, action) => {
      state.userEmail = action.payload
    }
  }
})
export default authSlice.reducer
export const { setUserEmail } = authSlice.actions
export const selectUserEmail = (state) => state.auth.userEmail
