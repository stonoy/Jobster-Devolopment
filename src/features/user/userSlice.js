import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch, { getLocalStorage, setLocalStorage } from "../../utils";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  user: getLocalStorage(),
};

export const registerUser = createAsyncThunk(
  "cart/register",
  async (user, thunkAPI) => {
    try {
      const res = await customFetch.post("/auth/register", user);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const loginUser = createAsyncThunk(
  "cart/login",
  async (user, thunkAPI) => {
    try {
      const res = await customFetch.post("/auth/login", user);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload: { user } }) => {
        state.isLoading = false;
        state.user = user;
        setLocalStorage(user);
        toast.success(`Hello there ${user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload: { user } }) => {
        state.isLoading = false;
        state.user = user;
        setLocalStorage(user);
        toast.success(`Welcome Back ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export default userSlice.reducer;
