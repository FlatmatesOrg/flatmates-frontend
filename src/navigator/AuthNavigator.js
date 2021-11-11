import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GetStartedScreen from "../screens/Auth/GetStartedScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";
import OTPScreen from "../screens/Auth/OTPScreen";
const AuthStackNavigator = createStackNavigator();

const AuthNavigator = () => {
	return (
		<AuthStackNavigator.Navigator screenOptions={{ headerShown: false }}>
			<AuthStackNavigator.Screen
				name="GetStarted"
				component={GetStartedScreen}
			/>
			<AuthStackNavigator.Screen name="Login" component={LoginScreen} />
			<AuthStackNavigator.Screen name="SignUp" component={SignUpScreen} />
			<AuthStackNavigator.Screen name="OTP" component={OTPScreen} />
		</AuthStackNavigator.Navigator>
	);
};

export default AuthNavigator;
