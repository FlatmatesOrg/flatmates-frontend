import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CityScreen from "../screens/Flow/CityScreen";
import { useSelector } from "react-redux";
import EditProfileScreen from "../screens/Flow/EditProfileScreen";
import OptionScreen from "../screens/Flow/OptionScreen";
import ApartmentScreen from "../screens/Flow/ApartmentScreen";
import RoommateScreen from "../screens/Flow/RoommateScreen";
const HomeStackNavigator = createStackNavigator();

const FlowNavigator = () => {
	const profileDetails = useSelector((state) => state.User);

	if (!profileDetails.firstName)
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

	return (
		<HomeStackNavigator.Navigator screenOptions={{ headerShown: false }}>
			<HomeStackNavigator.Screen name="Option" component={OptionScreen} />
			<HomeStackNavigator.Screen name="City" component={CityScreen} />
			<HomeStackNavigator.Screen name="Apartment" component={ApartmentScreen} />
			<HomeStackNavigator.Screen name="Roommate" component={RoommateScreen} />
		</HomeStackNavigator.Navigator>
	);
};

export default FlowNavigator;
