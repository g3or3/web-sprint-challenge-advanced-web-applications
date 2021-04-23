import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
	const handleLogout = () => {
		localStorage.removeItem("token");
	};

	return (
		<Router>
			<div className="App">
				<header>
					Color Picker Sprint Challenge
					<a
						onClick={handleLogout}
						data-testid="logoutButton"
						href="/"
					>
						logout
					</a>
				</header>

				<Route exact path="/" component={Login} />
				<PrivateRoute path="/bubblepage" component={BubblePage} />
			</div>
		</Router>
	);
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.
