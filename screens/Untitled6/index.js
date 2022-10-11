import { FlatList } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled6 = () => {
  return <View style={_styles.Cupdsfha}>
      <TextInput style={_styles.PGlbUWQM}></TextInput><FlatList style={_styles.QjzacDNZ} renderItem={() => <View style={_styles.QFRndqYK}></View>} ItemSeparatorComponent={() => <View style={_styles.YuyPdpRc} />} data={[1, 2, 3]} keyExtractor={item => item.toString()}></FlatList></View>;
};

export default Untitled6;

const _styles = StyleSheet.create({
  Cupdsfha: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  PGlbUWQM: {
    left: 102,
    top: 37,
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 210,
    height: 107
  },
  pPGlznNi: {
    left: 80,
    top: 250,
    position: "absolute",
    width: 112,
    height: 77
  },
  QjzacDNZ: {
    left: 139,
    top: 395,
    position: "absolute",
    width: 145,
    height: 199
  },
  QFRndqYK: {
    width: 92,
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  YuyPdpRc: {
    backgroundColor: "#000000",
    height: 1
  }
});