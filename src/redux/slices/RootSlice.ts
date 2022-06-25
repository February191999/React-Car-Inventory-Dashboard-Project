import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        car_owner: 'Car Owner',
        car_make: 'Car Make',
        car_model: 'Car Model',
        owner_phone_number: 'Owner Phone Number',
    },
    reducers: {
        chooseCarOwner: (state, action) => { state.car_owner = action.payload},
        chooseCarMake: (state, action) => { state.car_make = action.payload},
        chooseCarModel: (state, action) => { state.car_model = action.payload},
        chooseOwnerPhoneNumber: (state, action) => { state.owner_phone_number = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseCarOwner, chooseCarMake, chooseCarModel, chooseOwnerPhoneNumber } = rootSlice.actions;