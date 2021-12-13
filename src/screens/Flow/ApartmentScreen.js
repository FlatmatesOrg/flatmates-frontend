import React from "react";
import {
	SafeAreaView,
	Text,
	StyleSheet,
	Platform,
	View,
	TouchableOpacity,
	FlatList,
} from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import Fonts from "../../constants/Fonts";
import ApartmentItem from "../../components/ApartmentItem";
export default function ApartmentScreen({ navigation }) {
	const apartments = useSelector((state) => state.Apartment.apartments);
	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				ListHeaderComponent={
					<>
						<View style={styles.row}>
							<TouchableOpacity
								onPress={() => navigation.goBack()}
								style={{
									backgroundColor: "rgb(201, 202, 203)",
									borderRadius: 14,
									padding: 4,
								}}
							>
								<Entypo name="chevron-small-left" size={24} color="black" />
							</TouchableOpacity>
							<TouchableOpacity onPress={() => navigation.navigate("Filter")}>
								<Feather name="align-right" size={32} color="black" />
							</TouchableOpacity>
						</View>
						<Text style={styles.title}>{apartments.length} results found</Text>
					</>
				}
				data={apartments}
				keyExtractor={(item) => item._id}
				renderItem={({ item }) => <ApartmentItem item={item} />}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? 45 : 0,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginHorizontal: "5%",
	},
	title: {
		fontSize: 18,
		color: "#000",
		marginTop: "10%",
		marginLeft: "5%",
	},
});
