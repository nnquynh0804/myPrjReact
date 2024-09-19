import { configureStore } from '@reduxjs/toolkit';
import tabReducer from '../reduxx/tabSlice';
import priceReducer from '../reduxx/priceSlice';
import tab1Reducer from '../reduxx/tabSlice2';
import tab2Reducer from './tabSlice3';
import tab3Reducer from './tabSlice4';
import tab4Reducer from './tabSlice5';
import tab5Reducer from './tabSlice6'

const store = configureStore({
  reducer: {
    tab: tabReducer,
    price: priceReducer,
    tab1: tab1Reducer,
    tab3:tab2Reducer,  
    tab4:tab3Reducer,
    tab5:tab4Reducer,
    tab6:tab5Reducer,
  },
});

export default store;