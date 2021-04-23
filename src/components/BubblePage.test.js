import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

const { findByTestId } = screen;

test("Renders BubblePage without errors", () => {
	render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
	const { rerender, debug } = render(<BubblePage />);
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
