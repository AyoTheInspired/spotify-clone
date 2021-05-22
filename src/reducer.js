export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	token: null,
	// token:
	// 	"BQBqCdJPPzW-PKJhIqWPs062H31HissaEsSga2tPol4qJx6Fdk2PhZ-Kt5VOLmxp6LWnaYZWaO3-aHAU4Uxq407I7eq336vjl_ZpVnFNC-e8iiK7kMu0aZF2IXdevFFT2jKKdM1lZlyVA-ouGpSFcz9p3cMQjdNzZNFU6n6GKGE-qvtzciii",
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_USER":
			return { ...state, user: action.user };
			console.log(action);

		case "SET_TOKEN":
			return {
				...state,
				token: action.token,
			};

		case "SET_PLAYLISTS":
			return {
				...state,
				playlists: action.playlists,
			};

		case "SET_DISCOVER_WEEKLY":
			return {
				...state,
				discover_weekly: action.discover_weekly,
			};

		default:
			return state;
	}
};

export default reducer;
