import React, { useState } from "react";
import {
	Platform,
	StyleSheet,
	ImageBackground,
	View,
	TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";

import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../constants/Colors";
import PickName from "../../components/PickName";
import PickAvatar from "../../components/PickAvatar";
import PickInterests from "../../components/PickInterests";
import PickLocation from "../../components/PickLocation";

export default function NameAgeScreen({ navigation }) {
	const userDetails = useSelector((state) => state.User);
	const [firstName, setFirstName] = useState(userDetails.firstName);
	const [lastName, setLastName] = useState(userDetails.lastName);
	const [displayPicture, setDisplayPicture] = useState(
		userDetails.displayPicture
	);
	const [interests, setInterests] = useState([]);
	const [age, setAge] = useState(userDetails.age);
	const [nameAge, setNameAge] = useState(true);
	const [dp, setDp] = useState(false);
	const [onInterests, setOnInterests] = useState(false);
	const [onLocation, setOnLocation] = useState(false);
	const pickNameHandler = () => {
		setNameAge(false);
		setDp(true);
	};
	const pickAvatarHandler = () => {
		setDp(false);
		setOnInterests(true);
	};
	const goBackHandler = () => {
		if (dp) {
			setDp(false);
			setNameAge(true);
		} else if (onInterests) {
			setDp(true);
			setOnInterests(false);
		}
	};

	return (
		<ImageBackground
			source={require("../../../assets/images/GroupRear.png")}
			style={styles.container}
			blurRadius={5}
		>
			<LinearGradient
				colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.8)"]}
				start={{ x: 0, y: 0 }}
				end={{ x: 0.4, y: 0.8 }}
				style={{
					position: "absolute",
					opacity: 1,
					width: "100%",
					height: "120%",
				}}
			></LinearGradient>
			{!nameAge && (
				<TouchableOpacity
					style={{ paddingTop: 25 }}
					onPress={() => goBackHandler()}
				>
					<Entypo name="chevron-left" size={32} color={Colors.secondary} />
				</TouchableOpacity>
			)}

			{nameAge && (
				<PickName
					firstName={firstName}
					lastName={lastName}
					setFirstName={setFirstName}
					setLastName={setLastName}
					age={age}
					setAge={setAge}
					pickNameHandler={pickNameHandler}
				/>
			)}
			{dp && (
				<PickAvatar
					displayPicture={displayPicture}
					setDisplayPicture={setDisplayPicture}
					pickAvatarHandler={pickAvatarHandler}
				/>
			)}
			{onLocation && <PickLocation />}
			{onInterests && (
				<PickInterests interests={interests} setInterests={setInterests} />
			)}
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
		paddingTop: Platform.OS === "android" ? 25 : 25,
	},
	subContainer: {
		// backgroundColor: "rgba(255, 255, 255,1)",
		borderTopRightRadius: 40,
		borderTopLeftRadius: 40,
		padding: 20,
		paddingBottom: 80,
		position: "absolute",
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
