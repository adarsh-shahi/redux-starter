import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
	name: "cars",
	initialState: {
		searchTerm: "",
		cars: [],
	},
	reducers: {
		changeSearchTerm(state, action) {
			state.searchTerm = action.payload;
		},
		addCar(state, action) {
			state.cars.push({
				id: nanoid,
				name: action.payload.name,
				cost: action.payload.cost,
			});
		},
		removeCar(state, action) {
			const index = state.cars.findIndex((car) => car.id === action.payload);
			state.splice(index, 1);
		},
	},
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
