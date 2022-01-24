import React from "react";
import { StyleSheet, Text, View } from "react-native";

type HomeProps = {
  title: string;
};

export const Home = ({ title }: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text>Hello {title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
