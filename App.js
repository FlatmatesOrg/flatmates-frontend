import * as React from "react";
import { AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";
import AppNavigator from "./src/navigator/AppNavigator";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
const fetchFonts = () => {
	return Font.loadAsync({
		logo: require("./assets/fonts/DrSugiyama-Regular.ttf"),
	});
};

export default function App() {
	const [fontLoaded, setFontLoaded] = React.useState(false);

	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onError={console.warn}
				onFinish={() => {
					setFontLoaded(true);
				}}
			/>
		);
	}
	return (
		<PaperProvider>
			<AppNavigator />
		</PaperProvider>
	);
}

AppRegistry.registerComponent(appName, () => App);
