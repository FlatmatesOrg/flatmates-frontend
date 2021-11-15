import React, { useMemo } from "react";
import {
	Text,
	View,
	StyleSheet,
	SafeAreaView,
	Alert,
	Platform,
} from "react-native";
import { AssetsSelector } from "expo-images-picker";
import { Ionicons } from "@expo/vector-icons";
import { MediaType } from "expo-media-library";
import Colors from "../../constants/Colors";

const ForceInset = {
	top: "never",
	bottom: "never",
};

// IOS users , make sure u can use the images uri to upload , if your getting invalid file path or u cant work with asset-library://
// Use = > getImageMetaData: true which will be little slower but give u also the absolute path of the Asset. just console loge the result to see the localUri

// See => https://docs.expo.dev/versions/latest/sdk/media-library/#assetinfo

export default function GetMultipleImagesScreen({ navigation }) {
	const onSuccess = (data) => {
		console.log(data);
		navigation.navigate("StepTwo", { data: data });
	};

	const widgetErrors = useMemo(
		() => ({
			errorTextColor: "black",
			errorMessages: {
				hasErrorWithPermissions: "Please Allow media gallery permissions.",
				hasErrorWithLoading: "There was an error while loading images.",
				hasErrorWithResizing: "There was an error while loading images.",
				hasNoAssets: "No images found.",
			},
		}),
		[]
	);

	const widgetSettings = useMemo(
		() => ({
			getImageMetaData: false, // true might perform slower results but gives meta data and absolute path for ios users
			initialLoad: 100,
			assetsType: [MediaType.photo, MediaType.video],
			minSelection: 3,
			maxSelection: 10,
			portraitCols: 4,
			landscapeCols: 4,
		}),
		[]
	);

	const widgetResize = useMemo(
		() => ({
			width: 50,
			compress: 0.7,
			base64: false,
			saveTo: "jpeg",
		}),
		[]
	);

	const _textStyle = {
		color: "white",
	};

	const _buttonStyle = {
		backgroundColor: Colors.secondary,
		borderRadius: 5,
	};

	const widgetNavigator = useMemo(
		() => ({
			Texts: {
				finish: "Continue",
				back: "Go Back",
				selected: "selected",
			},
			midTextColor: "#000",
			minSelection: 1,
			buttonTextStyle: _textStyle,
			buttonStyle: _buttonStyle,
			onBack: () => {
				navigation.navigate("StepTwo");
			},
			onSuccess: (e) => onSuccess(e),
		}),
		[]
	);

	const widgetStyles = useMemo(
		() => ({
			margin: 2,
			bgColor: "#fff",
			spinnerColor: "blue",
			widgetWidth: 99,

			videoIcon: {
				Component: Ionicons,
				iconName: "ios-videocam",
				color: "tomato",
				size: 20,
			},
			selectedIcon: {
				Component: Ionicons,
				iconName: "ios-checkmark-circle-outline",
				color: "white",
				bg: "rgba(76, 76, 76,0.6)",
				size: 26,
			},
		}),
		[]
	);

	return (
		<SafeAreaView forceInset={ForceInset} style={styles.container}>
			<View style={styles.container}>
				<AssetsSelector
					Settings={widgetSettings}
					Errors={widgetErrors}
					Styles={widgetStyles}
					Navigator={widgetNavigator}
					// Resize={widgetResize} know how to use first , perform slower results.
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? 25 : 0,
	},
});
