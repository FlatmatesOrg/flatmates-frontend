import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Flow/HomeScreen";
const HomeStackNavigator = createStackNavigator();

const FlowNavigator = () => {
	return (
		<HomeStackNavigator.Navigator screenOptions={{ headerShown: false }}>
			<HomeStackNavigator.Screen name="Home" component={HomeScreen} />
		</HomeStackNavigator.Navigator>
	);
};

export default FlowNavigator;
