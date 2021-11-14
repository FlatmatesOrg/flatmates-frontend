import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Button } from "react-native-paper";
export default function MapAddress({ item, addressLoading, refRBSheet }) {
	const title = item?.split(",")[0];
	const address = item?.split(",").slice(1).join(",").replace(" ", "");
	return (
		<View style={styles.addressContainer}>
			<View style={styles.notch} />
			<View style={styles.row}>
				<Text style={{ fontWeight: "500", fontSize: 18 }}>
					{addressLoading ? "Locating" : title}
				</Text>
				<Text
					numberOfLines={1}
					ellipsizeMode="tail"
					style={{ fontWeight: "400", fontSize: 14, color: "#9d9b9b" }}
				>
					{address}
				</Text>
			</View>
			<Button
				dark
				color={Colors.secondary}
				style={styles.button}
				mode="contained"
				uppercase={false}
				onPress={() => refRBSheet.current.open()}
				contentStyle={{ padding: 10 }}
			>
				Confirm and Proceed
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	addressContainer: {
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		height: 200,
		position: "absolute",
		backgroundColor: "white",
		bottom: 0,
		zIndex: 1,
		width: "100%",
		paddingHorizontal: 20,
	},
	notch: {
		backgroundColor: Colors.secondary,
		height: 5,
		borderRadius: 10,
		width: "16%",
		alignSelf: "center",
		marginVertical: 10,
	},
	row: {
		flexDirection: "column",
		justifyContent: "space-between",
		width: "70%",
		textAlign: "left",
	},
	button: {
		width: "100%",
		alignSelf: "center",
		borderRadius: 10,
		marginTop: 20,
	},
});
