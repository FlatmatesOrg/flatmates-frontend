import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CityScreen from "../screens/Flow/CityScreen";
import { useSelector } from "react-redux";
import EditProfileScreen from "../screens/Flow/EditProfileScreen";
import OptionScreen from "../screens/Flow/OptionScreen";
import ApartmentListScreen from "../screens/Flow/ApartmentListScreen";
import RoommateScreen from "../screens/Flow/RoommateScreen";
import LocationScreen from "../screens/Flow/LocationScreen";
import StepTwoScreen from "../screens/Flow/StepTwoScreen";
import GetMultipleImagesScreen from "../screens/Flow/GetMultipleImagesScreen";
import StepThreeScreen from "../screens/Flow/StepThreeScreen";
import PreviewScreen from "../screens/Flow/PreviewScreen";
import FilterScreen from "../screens/Flow/FilterScreen";
import GetAddressScreen from "../screens/Flow/GetAddressScreen";
import ApartmentScreen from "../screens/Flow/ApartmentScreen";
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
			<HomeStackNavigator.Screen
				name="ApartmentList"
				component={ApartmentListScreen}
			/>
			<HomeStackNavigator.Screen name="Apartment" component={ApartmentScreen} />
			<HomeStackNavigator.Screen name="Location" component={LocationScreen} />
			<HomeStackNavigator.Screen name="Roommate" component={RoommateScreen} />
			<HomeStackNavigator.Screen
				name="StepTwo"
				initialParams={{ data: [] }}
				component={StepTwoScreen}
			/>
			<HomeStackNavigator.Screen
				name="Images"
				component={GetMultipleImagesScreen}
			/>
			<HomeStackNavigator.Screen name="StepThree" component={StepThreeScreen} />
			<HomeStackNavigator.Screen name="Preview" component={PreviewScreen} />
			<HomeStackNavigator.Screen name="Filter" component={FilterScreen} />
			<HomeStackNavigator.Screen
				name="GetAddress"
				component={GetAddressScreen}
			/>
		</HomeStackNavigator.Navigator>
	);
};

export default FlowNavigator;
