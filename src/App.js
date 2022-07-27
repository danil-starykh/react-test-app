import React, { useState, useEffect } from 'react';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import './styles/App.css';
import MyNavbar from './components/UI/navbar/MyNavbar';
import { AuthContext } from './context';

function App() {
	const [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
		if (localStorage.getItem('auth')) {
			setIsAuth(true);
		}
	}, [])

	return (
		<AuthContext.Provider value={{
			isAuth,
			setIsAuth
		}}>
			<BrowserRouter>
			<MyNavbar />
			<AppRouter/>
			</BrowserRouter>
		</AuthContext.Provider>
	);
}

export default App;
