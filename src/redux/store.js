import { configureStore } from '@reduxjs/toolkit';
import reducer from './slice';

const store = configureStore({
  reducer: {
    globalState: reducer,
  },
});

export default store;
