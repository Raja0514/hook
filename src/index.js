import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Amplify} from 'aws-amplify';
import awsconfig from './aws-exports';

import { Authenticator } from '@aws-amplify/ui-react';

import '@aws-amplify/ui-react/styles.css';



Amplify.configure(awsconfig)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Authenticator>

  <React.StrictMode>
    <App />
   

  </React.StrictMode>
        </Authenticator>

);

