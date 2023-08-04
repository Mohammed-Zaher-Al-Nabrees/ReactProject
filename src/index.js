import {createRoot } from "react-dom/client"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import App from './App';


const root = createRoot(document.getElementById('root'));

root.render(<App />);