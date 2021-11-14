import React, { useRef, useEffect } from "react";
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	Animated,
	StyleSheet,
	Platform,
	Image,
} from "react-native";
import { Searchbar, List, Divider } from "react-native-paper";
import Colors from "../constants/Colors";
import useSearchLocation from "../hooks/useSearchLocation";
import AnimatedLocation from "./AnimatedLocation";

export default function PickLocation({
	locality,
	setLocality,
	pickLocationHandler,
}) {
	const [getSearchLocation, items, setItems] = useSearchLocation();
	const headerAnim = useRef(new Animated.Value(1000)).current;
	const searchBarAnim = useRef(new Animated.Value(1000)).current;
	useEffect(() => {
		Animated.spring(headerAnim, {
			toValue: 0,
			delay: 100,
			useNativeDriver: true,
		}).start();
		Animated.spring(searchBarAnim, {
			toValue: 0,
			delay: 200,
			useNativeDriver: true,
		}).start();
	});
	return (
		<View style={styles.container}>
			<Animated.Text
				style={[styles.header, { transform: [{ translateX: headerAnim }] }]}
			>
				Your locality
			</Animated.Text>
			<Animated.View style={[{ transform: [{ translateX: searchBarAnim }] }]}>
				<Searchbar
					inputStyle={{ color: "#fff" }}
					placeholderTextColor="#fff"
					iconColor="#fff"
					style={{
						marginVertical: 25,
						marginHorizontal: 15,
						borderRadius: 10,
						overflow: "hidden",

						backgroundColor: "rgba(76, 76, 76,0.6)",
					}}
					placeholder="I am from.."
					onChangeText={getSearchLocation}
				/>
			</Animated.View>
			<FlatList
				data={items}
				renderItem={({ item, index }) => {
					return (
						<AnimatedLocation
							index={index}
							item={item}
							setLocality={setLocality}
							pickLocationHandler={pickLocationHandler}
						/>
					);
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-end",
		paddingTop: Platform.OS === "android" ? 25 : 25,
	},
	subContainer: {
		padding: 20,
		paddingBottom: 80,
		bottom: 0,
		width: "100%",
	},
	header: {
		fontSize: 24,
		margin: 20,
		marginBottom: 20,
		fontWeight: "bold",
		color: Colors.secondary,
	},
	input: {
		marginHorizontal: 40,
		marginVertical: 20,
		color: "#fff",
	},
	button: {
		alignSelf: "center",
		width: "80%",
		borderRadius: 10,
	},
});
