import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type ItemType = { id: string; name: string };

interface ItemsState {
    list: ItemType[];
}

const initialState: ItemsState = { list: [] };

const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ItemType>) => {
            state.list.push(action.payload);
        },
        deleteItem: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter((item) => item.id !== action.payload);
        },
        updateItem: (state, action: PayloadAction<ItemType>) => {
            const index = state.list.findIndex((i) => i.id === action.payload.id);
            if (index !== -1) {
                state.list[index] = action.payload;
            }
        }

    },
});

export const { addItem, deleteItem, updateItem } = itemsSlice.actions;
export default itemsSlice.reducer;
