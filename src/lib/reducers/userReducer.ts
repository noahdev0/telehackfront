import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  userId: any;
  userRole: any;
  isAuthenticated: boolean;
  user: object | null;
};

const initialState: AuthState = {
  userId: null,
  userRole: null,
  isAuthenticated: false,
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
      state.userRole = action.payload;
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      state.userId = null;
      state.userRole = null;
      state.isAuthenticated = false;
      state.user = {};
    },
    userdata: (state, action: PayloadAction<object>) => {
      state.user = action.payload;
    },
  },
});

export const { loginUser, userdata, logoutUser } = authSlice.actions;
export default authSlice.reducer;
