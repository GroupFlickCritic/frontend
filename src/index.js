import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
<<<<<<< HEAD
import './index.css';
=======
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

>>>>>>> 3b50d75... fixed compile error in gitignore


ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);
