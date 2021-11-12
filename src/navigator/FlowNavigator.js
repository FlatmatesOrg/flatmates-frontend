import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Flow/HomeScreen";
import { useSelector } from "react-redux";
import EditProfileScreen from "../screens/Flow/EditProfileScreen";
const HomeStackNavigator = createStackNavigator();

const FlowNavigator = () => {
	const profileDetails = useSelector((state) => state.User);
	return (
		<HomeStackNavigator.Navigator
			screenOptions={{ headerShown: false, animationEnabled: false }}
		>
			<HomeStackNavigator.Screen
				name="EditProfile"
				component={EditProfileScreen}
			/>
		</HomeStackNavigator.Navigator>
	);
};

export default FlowNavigator;
