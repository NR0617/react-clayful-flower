import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import clayful from "clayful/client-js";
import axios from "axios";
import "./css/auth.css";


clayful.config({
  client: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYxMmI0YWVjZGVhZmI1ZDY0ZDNhMzZkOWIzY2ExZGJlMWJiY2M3MGZkYmNiMjdkYTYwOGVjYTc0YzQ0ZTVhZWEiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjQ0OTY5ODkzLCJzdG9yZSI6IkNSQUpGSFc4NUZWVi5SWldGQVdQR0pEN1EiLCJzdWIiOiJVSjJKV0FKUDJGMjcifQ.j8-I-_OQDlGWEWR-UFgYGxvygAUMFLUCZu_TR7wY_dI",
});

clayful.install("request", require("clayful/plugins/request-axios")(axios));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
