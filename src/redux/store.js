import { configureStore } from "@reduxjs/toolkit";

import potentialCountriesReducer from "./slices/potentialCountriesSlice";
import displayedCountryReducer from "./slices/displayCountrySlice";

const store = configureStore({
  reducer: {
    potentialCountries: potentialCountriesReducer,
    displayedCountry: displayedCountryReducer,
  },
});

export default store;
