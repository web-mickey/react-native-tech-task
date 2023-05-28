import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import CText from "./custom/CText";

const TopBar = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const isDetaulsScreen = route.name === "Details";

  return (
    <View style={styles.container}>
      <View style={styles.leftButtonContainer}>
        {isDetaulsScreen && (
          <TouchableOpacity
            style={styles.navContainer}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back-outline" size={32} />
            <CText header>Back</CText>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.routeNameContainer}>
        <CText header>{route.name}</CText>
      </View>
      <View style={styles.rightButtonContainer} />
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  leftButtonContainer: {
    flex: 1,
  },
  navContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  routeNameContainer: {
    flex: 1,
    alignItems: "center",
  },
  rightButtonContainer: {
    flex: 1,
  },
});
