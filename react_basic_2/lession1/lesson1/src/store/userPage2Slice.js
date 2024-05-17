import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchUserPage2 = createAsyncThunk("userPage2/getListUsers", () => {
    return fetch("https://reqres.in/api/users?page=2").then((res) => {
        return res.json().then((res) => {
            return res.data;
        });

    });
});

const initialState = {
    status: "idle",
    userList: [],
};

const userPage2Slice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUserPage2.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchUserPage2.fulfilled, (state, action) => {
                state.status = "success";
                state.userList = [...action.payload];
            })
            .addCase(fetchUserPage2.rejected, (state, action) => {
                state.status = "failed";

            });
    }
})

export default userPage2Slice.reducer;