import React, { useMemo, useState } from "react";
import {
	View,
	SafeAreaView,
	Text,
	TouchableOpacity,
	StyleSheet,
	Platform,
	Image,
} from "react-native";
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import Fonts from "../../constants/Fonts";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import Colors from "../../constants/Colors";
import * as requestActions from "../../store/actions/Request";

export default function StepTwoScreen({ navigation, route }) {
	const title = useSelector((state) => state.Request.title);
	const { data } = route.params;
	const dispatch = useDispatch();
	const [description, setDescription] = useState(
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
	);

	const onSubmit = () => {
		dispatch(requestActions.updateStepTwo(description, data));
		navigation.navigate("StepThree");
	};
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					style={styles.backButtonStyle}
				>
					<Entypo name="chevron-small-left" size={24} color="black" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Step 2 of 3: Add photos</Text>
			</View>
			<Text style={styles.title}>{title}</Text>
			<TextInput
				mode="outlined"
				multiline={true}
				value={description}
				onChangeText={(text) => setDescription(text)}
				style={styles.input}
				underlineColor={Colors.primary}
				theme={{
					colors: {
						primary: Colors.secondary,
						background: "transparent",
						placeholder: Colors.primary,
						text: Colors.secondary,
					},
				}}
				numberOfLines={3}
			/>
			<View style={styles.row}>
				<AntDesign name="infocirlce" size={20} color={Colors.secondary} />
				<Text style={{ fontSize: 14, marginLeft: 20, color: "#9b9b9b" }}>
					Atleast 50-60 words
				</Text>
			</View>
			<Text style={{ marginHorizontal: 20, marginTop: 40, fontSize: 16 }}>
				Property Images{" "}
				<Text style={{ color: Colors.secondary }}>(Min. 4 Photos)</Text>{" "}
			</Text>
			<View
				style={{
					flexDirection: "row",
					flexWrap: "wrap",
					marginHorizontal: 20,
					marginTop: 20,
				}}
			>
				<TouchableOpacity
					style={styles.imageContainer}
					onPress={() => navigation.navigate("Images")}
				>
					<AntDesign name="plus" size={24} color="black" />
				</TouchableOpacity>
				{data.map((item, index) => {
					if (index > 2) return null;
					return (
						<View
							style={[
								styles.imageContainer,
								{
									borderStyle: "solid",
									borderWidth: 0,
									overflow: "hidden",
								},
							]}
						>
							<Image
								source={{ uri: item.uri }}
								style={{ width: "100%", height: "100%" }}
							/>
							{index === 2 ? (
								<View
									style={[
										styles.imageContainer,
										{
											borderStyle: "solid",
											borderWidth: 0,
											width: "100%",
											overflow: "hidden",
											position: "absolute",
											backgroundColor: "rgba(76, 76, 76,0.6)",
											alignItems: "center",
											justifyContent: "center",
										},
									]}
								>
									<Text style={{ color: "#fff", fontSize: 24 }}>
										+{data.length - 3}
									</Text>
								</View>
							) : null}
						</View>
					);
				})}
			</View>
			<Button
				onPress={() => {
					onSubmit();
				}}
				dark
				color={Colors.secondary}
				style={styles.button}
				mode="contained"
				contentStyle={{ padding: 10 }}
			>
				Continue
			</Button>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	imageContainer: {
		height: 100,
		width: "45%",
		borderRadius: 10,
		borderColor: Colors.primary,
		borderWidth: 2,
		marginHorizontal: 5,
		marginVertical: 5,
		borderStyle: "dashed",
		alignItems: "center",
		justifyContent: "center",
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: Platform.OS === "android" ? 50 : 0,
	},

	header: {
		zIndex: 1,
		flexDirection: "row",
		alignItems: "center",
		paddingLeft: 20,
	},
	headerTitle: {
		fontSize: 18,
		marginLeft: 20,
	},
	title: {
		fontFamily: Fonts.title,
		fontSize: 24,
		paddingLeft: 20,
		marginTop: 20,
	},
	backButtonStyle: {
		backgroundColor: "rgb(201, 202, 203)",
		borderRadius: 14,
		padding: 4,
	},
	button: {
		width: "80%",
		alignSelf: "center",
		borderRadius: 10,
		marginTop: 20,
	},
	input: {
		marginHorizontal: 40,
		marginVertical: 20,
		color: "#fff",
	},
	row: {
		flexDirection: "row",
		marginHorizontal: 40,
		alignItems: "center",
	},
});
