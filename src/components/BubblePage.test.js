import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchBubbles as mockFetchBubbles } from "../fetchBubbles";

jest.mock("../fetchBubbles");

const testColors = {
	data: [
		{
			color: "aliceblue",
			code: {
				hex: "#f0f8ff",
			},
			id: 1,
		},
		{
			color: "limegreen",
			code: {
				hex: "#99ddbc",
			},
			id: 2,
		},
		{
			color: "aqua",
			code: {
				hex: "#00ffff",
			},
			id: 3,
		},
	],
};

const { findAllByTestId } = screen;

test("Renders BubblePage without errors", async () => {
	mockFetchBubbles.mockResolvedValue(testColors);
	render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
	mockFetchBubbles.mockResolvedValue(testColors);

	render(<BubblePage />);

	expect(await findAllByTestId("color")).toHaveLength(3);
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
