import { axiosWithAuth } from "./helpers/axiosWithAuth";

export const fetchBubbles = () => {
	return axiosWithAuth()
		.get("/api/colors")
		.then((res) => {
			return res;
		})
		.catch((err) => console.log(err));
};
