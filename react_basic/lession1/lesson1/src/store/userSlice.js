import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const data = await fetch("http://localhost:3000/users");
    const result = await data.json();
    console.log(result);
    return result;
});


const initialState = {
    status: "idle",
    users: [],
};
const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Add any fetched posts to the array
                console.log('action', action)
                // state.users = state.users.concat(action.payload)
                state.users = [...action.payload]
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
            });
    },
});

export default userSlice.reducer;




//status 