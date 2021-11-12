import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
	_id: "",
	firstName: "",
	lastName: "",
	interests: [],
	locality: "",
	phoneNumber: "",
	type: "",
	age: "",
};

export default (state = initialState, action) => {
	switch (action.type) {
		default: {
			return state;
		}
	}
};
