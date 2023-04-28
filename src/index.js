import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import App1 from "./App1";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";



import { BrowserRouter } from "react-router-dom";


Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <React.StrictMode>
    <BrowserRouter>

      <App1 />
      </BrowserRouter>

    </React.StrictMode>
  
);
