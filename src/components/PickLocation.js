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

export default function PickLocation() {
	const [getSearchLocation, items, setItems] = useSearchLocation();
	const headerAnim = useRef(new Animated.Value(1000)).current;
	useEffect(() => {
		Animated.spring(headerAnim, {
			toValue: 0,
			delay: 500,
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
			<Searchbar
				style={{
					marginVertical: 25,
					marginHorizontal: 15,
					borderRadius: 10,
					overflow: "hidden",
				}}
				placeholder="I am from.."
				onChangeText={getSearchLocation}
			/>
			<FlatList
				data={items}
				renderItem={({ item }) => {
					console.log(item);
					return (
						<TouchableOpacity
							style={{
								marginHorizontal: 15,
								flexDirection: "row",
								backgroundColor: "#fff",
								justifyContent: "space-around",
								padding: 20,
								borderRadius: 10,
								marginVertical: 10,
							}}
							onPress={async () => {}}
						>
							{/* <List.Item
								title={item.name}
								description={item.address}
								style={{ padding: 10, backgroundColor: "#fff", margin: 10 }}
								titleStyle={{ fontWeight: "bold" }}
								descriptionStyle={{ fontSize: 12 }}
								left={(props) => (
									<List.Icon {...props} icon="map-marker-outline" />
								)}
							/> */}
							<Image
								source={{ uri: item.icon }}
								resizeMode="contain"
								style={{ height: "100%", width: 30 }}
							/>
							<View style={{ width: "80%" }}>
								<Text style={{ fontWeight: "800", fontSize: 18 }}>
									{item.name}
								</Text>
								<Text
									numberOfLines={1}
									ellipsizeMode="tail"
									style={{ fontWeight: "400", fontSize: 14 }}
								>
									{item.address}
								</Text>
							</View>
							<Divider />
						</TouchableOpacity>
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
