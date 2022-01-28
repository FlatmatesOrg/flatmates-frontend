import React from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	Image,
	TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, Ionicons, Feather } from "@expo/vector-icons";
import Colors from "../constants/Colors";
export default function ApartmentItem({ item }) {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<FlatList
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				data={item.gallery}
				ItemSeparatorComponent={() => <View style={styles.separator} />}
				keyExtractor={(item, index) => item}
				renderItem={({ item }) => (
					<Image
						source={{ uri: item }}
						style={{ height: 180, width: 320, borderRadius: 18 }}
					/>
				)}
			/>
			<View style={styles.subContainer}>
				<Text style={styles.title}>{item.title}</Text>

				<View style={styles.rowContainer}>
					<View style={styles.row}>
						<MaterialCommunityIcons
							name="human-male"
							size={18}
							color={Colors.secondary}
							style={{ marginRight: 10 }}
						/>
						<Text>{item.tenants}</Text>
					</View>
					<View style={styles.row}>
						<Ionicons
							name="bed"
							size={18}
							color={Colors.secondary}
							style={{ marginRight: 10 }}
						/>
						<Text>{item.rooms}</Text>
					</View>
					<View style={styles.row}>
						<Feather
							name="clock"
							size={18}
							color={Colors.secondary}
							style={{ marginRight: 10 }}
						/>
						<Text>{item.duration}</Text>
					</View>
				</View>
				<Text style={styles.address}>{item.address}</Text>
				<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
					<Button
						dark
						color={Colors.secondary}
						style={styles.button}
						mode="contained"
						uppercase={false}
						onPress={() => {
							navigation.navigate("Apartment", { apartment: item });
						}}
						contentStyle={{ padding: 10 }}
					>
						View Property
					</Button>
					<TouchableOpacity style={styles.menu}>
						<MaterialCommunityIcons
							name="dots-horizontal-circle-outline"
							size={24}
							color="black"
						/>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: "5%",
		marginVertical: 10,
	},
	subContainer: {
		marginTop: 10,
		marginHorizontal: 5,
	},
	separator: {
		width: 10,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginRight: 10,
		borderWidth: 0.2,
		borderColor: "rgb(174, 174, 174)",
		padding: 5,
		borderRadius: 4,
	},
	rowContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	button: {
		width: "80%",
		alignSelf: "flex-start",
		borderRadius: 10,
		marginTop: 20,
	},
	address: {
		fontSize: 15,
		fontStyle: "italic",
		color: "#9b9a9a",
	},
	menu: {
		backgroundColor: "#f6f6f6",
		borderColor: Colors.primary,
		borderWidth: 1,
		marginTop: 20,
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 10,
		borderRadius: 10,
		width: "15%",
	},
});
