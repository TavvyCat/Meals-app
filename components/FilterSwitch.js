import React from "react";
import { View, StyleSheet, Text, Switch, Platform } from "react-native";
import colors from "../constants/colors";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ false: "#ccc", true: colors.primary }}
        thumbColor={Platform.OS === "android" ? colors.primary : ""}
        value={props.value}
        onValueChange={props.onValueChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15
  },
});

export default FilterSwitch;
