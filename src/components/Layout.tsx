import { Platform, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "./TopBar";

type LayoutProps = { children: React.ReactNode };

const Layout = ({ children }: LayoutProps) => {
  const isAndroid = Platform.OS === "android";

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.topBarContainer}>
        <TopBar />
      </View>
      <View
        style={[
          styles.contentContainer,
          { flex: isAndroid ? 0.9 : 0.85, marginBottom: isAndroid ? 5 : 0 },
        ]}
      >
        {children}
      </View>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBarContainer: {
    flex: 0.1,
  },
  contentContainer: {
    flex: 0.9,
  },
});
