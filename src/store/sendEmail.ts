import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface UserData {
    name: string;
    email: string;
    message: string;
};

export const sendMsg = createAsyncThunk('Email/sendEmail', async (mailMsg: UserData) => {
    try {
        const response = await axios.post('https://emergent-server.vercel.app/sendEmail', mailMsg);

        return response.data;
    }
    catch (error) {
        return error;
    }
})

interface Data {
    mailStatus: string;
    error: null | string;
    status: string;
}

const initialState: Data = {
    mailStatus: 'idle',
    error: null,
    status: 'idle'
}

const sendEmailSlice = createSlice({
    name: 'Message',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(sendMsg.pending, (state) => {
            state.status = 'Loading...';
        })
        .addCase(sendMsg.fulfilled, (state, action) => {
            state.mailStatus = action.payload;
            state.status = 'Success';
            state.error = null;
        })
        .addCase(sendMsg.rejected, (state, action) => {
            state.mailStatus = '';
            state.status = 'Success';
            state.error = action.payload as string || 'Failed to send the message';
        })
    }
})

export default sendEmailSlice.reducer;