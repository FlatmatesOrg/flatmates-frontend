import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MainScreen from "../screens/Auth/MainScreen";

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<MainScreen />
		</NavigationContainer>
	);
};

export default AppNavigator;
