import React from 'react'
import ReactDOM  from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App.jsx'
import 'antd/dist/reset.css';
import { Provider } from 'react-redux';
import store from './Store/index.js';


ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <HashRouter>
     <App />
    </HashRouter>
  </Provider>
 ,
)
