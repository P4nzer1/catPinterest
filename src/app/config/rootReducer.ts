import { combineReducers } from '@reduxjs/toolkit';

import catsSlice from '@/entities/Cats/model/catsSlice';

const rootReducer = combineReducers({
    cats: catsSlice,
});

export default rootReducer;