import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import axios from 'axios';
// import axiosMiddleware from 'redux-axios-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

//= ========== axios instance ===============================

// const client = axios.create({
//   baseURL: 'https://task-manager.goit.co.ua/api/',
//   // baseURL: 'http://192.168.89.246:5000/api/',

//   responseType: 'json'
// });

// // Add a request interceptor
// client.interceptors.request.use(function(config) {
//   const token = store.getState().session.token;
//   config.headers.Authorization = `Bearer ${token}`;
//   // config.headers.Authorization = token;

//   return config;
// });

//= ===========================================================

const middleWares = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middleWares));

const store = createStore(rootReducer, enhancer);

export default store;
