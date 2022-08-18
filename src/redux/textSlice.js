import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
    name: "text",
    initialState: {
        items: [],
        paras: 4,
        format: 'text'
    },
    reducers: {
        setParas: (state, action) => {
            state.paras = action.payload;
        },
        setFormat: (state, action) => {
            state.format = action.payload;
        }
    }
})

export const {setParas, setFormat} = textSlice.actions
export default textSlice.reducer