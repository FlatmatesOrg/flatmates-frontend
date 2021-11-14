import React, { useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, Animated, Image } from "react-native";

export default function AnimatedLocation({
	item,
	setLocality,
	pickLocationHandler,
	index,
}) {
	const anim = useRef(new Animated.Value(-50)).current;
	useEffect(() => {
		Animated.timing(anim, {
			toValue: 0,
			duration: 500,
			delay: index * 100,
			useNativeDriver: true,
		}).start();
	});
	return (
		<Animated.View style={{ transform: [{ translateY: anim }] }}>
			<TouchableOpacity
				onPress={() => {
					setLocality(`${item.name} ${item.address}`);
					pickLocationHandler(`${item.name} # ${item.address}`);
				}}
				style={{
					marginHorizontal: 15,
					flexDirection: "row",
					backgroundColor: "rgba(76, 76, 76,0.6)",
					justifyContent: "space-around",
					padding: 20,
					borderRadius: 10,
					marginVertical: 10,
				}}
			>
				<Image
					source={{ uri: item.icon }}
					resizeMode="contain"
					style={{ height: "100%", width: 24 }}
				/>
				<View style={{ width: "80%" }}>
					<Text style={{ color: "#fff", fontWeight: "500", fontSize: 18 }}>
						{item.name}
					</Text>
					<Text
						numberOfLines={1}
						ellipsizeMode="tail"
						style={{ color: "#fff", fontWeight: "400", fontSize: 14 }}
					>
						{item.address}
					</Text>
				</View>
			</TouchableOpacity>
		</Animated.View>
	);
}
