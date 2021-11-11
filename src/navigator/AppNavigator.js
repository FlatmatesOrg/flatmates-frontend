import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthNavigator from "./AuthNavigator";

import { useSelector } from "react-redux";
import FlowNavigator from "./FlowNavigator";
import InitialScreen from "../screens/InitialScreen";

const AppNavigator = () => {
	const Auth = useSelector((state) => state.Auth);
	const { isAuth, didTryAutoLogin } = Auth;

	return (
		<NavigationContainer>
			{!isAuth && !didTryAutoLogin && <InitialScreen />}
			{!isAuth && didTryAutoLogin && <AuthNavigator />}
			{isAuth && <FlowNavigator />}
		</NavigationContainer>
	);
};

export default AppNavigator;
