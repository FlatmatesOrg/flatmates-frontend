import React, { useEffect, useRef } from "react";
import {
	View,
	Text,
	Animated,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-paper";
export default function AnimatedAvatar({
	index,
	a,
	displayPicture,
	setDisplayPicture,
}) {
	const avatarAnim = useRef(new Animated.Value(1000)).current;
	useEffect(() => {
		Animated.timing(avatarAnim, {
			toValue: 0,
			duration: 500,
			delay: index * 100,
			useNativeDriver: true,
		}).start();
	});

	return (
		<Animated.View
			style={{
				transform: [{ translateX: avatarAnim }],
			}}
		>
			<TouchableOpacity onPress={() => setDisplayPicture(a.src)}>
				<Avatar.Image
					style={[
						{
							backgroundColor: "#fff",
							opacity: displayPicture === a.src ? 1 : 0.3,
						},

						styles.avatar,
					]}
					size={64}
					source={{ uri: a.src }}
				/>
			</TouchableOpacity>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	avatar: {
		margin: 10,
	},
});
