import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUserPage1 = createAsyncThunk("usersPage1/getListUsers1", () => {
    return fetch("https://reqres.in/api/users?page=1").then((res) => {
        return res.json().then((res) => {
            return res.data;
        });
    });
});

const initialState = {
    status: "idle",
    userList1: [],
};


const userPage1Slice = createSlice({
    name: "user1",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUserPage1.pending, (state, action) => {
                state.state = "loading";
            })
            .addCase(fetchUserPage1.fulfilled, (state, action) => {
                state.state = "sucess";
                state.userList1 = [...action.payload];
            }).addCase(fetchUserPage1.rejected, (state, action) => {
                state.state = "faild";
            })
    }
})

export default userPage1Slice.reducer;