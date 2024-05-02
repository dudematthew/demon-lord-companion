import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    user: null | { name: string; email: string };
};

const initialState: UserState = {
    user: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ name: string; email: string }>) => {
            state.user = action.payload;
        },
        removeUser: (state) => {
            state.user = null;
        }
    },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;