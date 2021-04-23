import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const initialFormVals = {
	username: "",
	password: "",
};

const Login = () => {
	const [formVals, setFormVals] = useState(initialFormVals);
	const [error, setError] = useState("");

	const { push } = useHistory();

	useEffect(() => {
		// make a post request to retrieve a token from the api
		// when you have handled the token, navigate to the BubblePage route
	});

	const validate = () => {
		return username !== "" && password !== "" ? true : false;
	};

	const handleChange = (e) => {
		e.persist();
		setFormVals({ ...formVals, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormVals(initialFormVals);

		if (validate()) {
			axiosWithAuth()
				.post("/api/login", formVals)
				.then((res) => {
					setError("");
					localStorage.setItem("token", res.data.payload);
					push("/bubblepage");
				})
				.catch((err) => {
					console.log(err.response.data.error);
					setError("Username or Password not valid.");
				});
		} else setError("One or more missing fields.");
	};

	const { username, password } = formVals;

	return (
		<div>
			<h1>Welcome to the Bubble App!</h1>
			<div data-testid="loginForm" className="login-form">
				<h2>Build login form here</h2>
				<form onSubmit={handleSubmit}>
					<label>
						Username:
						<input
							name="username"
							value={username}
							onChange={handleChange}
							data-testid="username"
						/>
					</label>
					<label>
						Password:
						<input
							name="password"
							value={password}
							onChange={handleChange}
							data-testid="password"
						/>
					</label>
					<button>Log In</button>
				</form>
			</div>
			<p data-testid="errorMessage" className="error">
				{error}
			</p>
		</div>
	);
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
