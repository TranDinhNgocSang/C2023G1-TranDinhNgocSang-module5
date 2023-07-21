import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Submit from './Submit'
import Submitt from './Submitt'
import Textarea from './Textarea';
import reportWebVitals from './reportWebVitals';
import FileUploadPage from './FileUploadPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const koot = ReactDOM.createRoot(document.getElementById('koot'));
koot.render(
  <React.StrictMode>
    <Submit />
  </React.StrictMode>
);

const hoot = ReactDOM.createRoot(document.getElementById('hoot'));
hoot.render(
  <React.StrictMode>
    <Submitt />
  </React.StrictMode>
);

const coot = ReactDOM.createRoot(document.getElementById('coot'));
coot.render(
  <React.StrictMode>
    <Textarea />
  </React.StrictMode>
);

const boot = ReactDOM.createRoot(document.getElementById('boot'));
boot.render(
  <React.StrictMode>
    <FileUploadPage />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
