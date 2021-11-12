import * as React from "react";
import { AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import AuthReducer from "./src/store/reducers/Auth";
import UserReducer from "./src/store/reducers/User";
import { name as appName } from "./app.json";
import AppNavigator from "./src/navigator/AppNavigator";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
const fetchFonts = () => {
	return Font.loadAsync({
		logo: require("./assets/fonts/DrSugiyama-Regular.ttf"),
	});
};

const rootReducer = combineReducers({
	Auth: AuthReducer,
	User: UserReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

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
		<Provider store={store}>
			<PaperProvider>
				<AppNavigator />
			</PaperProvider>
		</Provider>
	);
}

AppRegistry.registerComponent(appName, () => App);
