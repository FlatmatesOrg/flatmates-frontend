import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthNavigator from "./AuthNavigator";

import { useSelector } from "react-redux";
import FlowNavigator from "./FlowNavigator";
import InitialScreen from "../screens/InitialScreen";
import { View } from "react-native";
// import { transparent } from "react-native-paper/lib/typescript/styles/colors";

const AppNavigator = () => {
	const Auth = useSelector((state) => state.Auth);
	const { isAuth, didTryAutoLogin } = Auth;

	return (
		<View style={{ flex: 1, backgroundColor: "#000" }}>
			<NavigationContainer>
				{!isAuth && !didTryAutoLogin && <InitialScreen />}
				{!isAuth && didTryAutoLogin && <AuthNavigator />}
				{isAuth && <FlowNavigator />}
			</NavigationContainer>
		</View>
	);
};

export default AppNavigator;
