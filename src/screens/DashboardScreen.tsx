import { sortBy, startCase } from "lodash";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../colors";
import Layout from "../components/Layout";
import CText from "../components/custom/CText";
import useFetchList from "../hooks/useFetchList";

const DashboardScreen = ({ navigation }) => {
  const [searchString, setSearchString] = useState("");
  const { data, isLoading, error } = useFetchList();

  if (error) {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text>Error: Could not load data</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <Layout>
      <View style={styles.container}>
        <TextInput
          placeholder="Search..."
          value={searchString}
          onChangeText={(val) => setSearchString(val)}
          style={styles.searchInput}
        />
        {isLoading && !error ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={sortBy(data.results, "name").filter((item) =>
              item.name.toLowerCase().includes(searchString.toLowerCase())
            )}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() =>
                  navigation.navigate("Details", { name: item.name })
                }
              >
                <CText>
                  {index + 1}. {startCase(item.name)}
                </CText>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.name}
          />
        )}
      </View>
    </Layout>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    gap: 4,
  },
  searchInput: {
    height: 50,
    borderWidth: 1,
    borderColor: colors.black,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 16,
  },
  itemContainer: {
    marginVertical: 4,
    paddingVertical: 10,
  },
});
