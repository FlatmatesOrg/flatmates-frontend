import React, { useEffect, useRef } from "react";
import {
	View,
	Text,
	Animated,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-paper";
export default function AnimatedAvatar({ index, a }) {
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
			key={index}
			style={{ transform: [{ translateX: avatarAnim }] }}
		>
			<TouchableOpacity>
				<Avatar.Image style={styles.avatar} size={64} source={a.src} />
			</TouchableOpacity>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	avatar: {
		margin: 10,
		backgroundColor: "#fff",
	},
});
