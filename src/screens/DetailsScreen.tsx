import { startCase } from "lodash";
import { Image, StyleSheet, Text, View } from "react-native";
import Layout from "../components/Layout";
import CText from "../components/custom/CText";
import useFetchDetails from "../hooks/useFetchDetails";

const DetailsScreen = ({ route }) => {
  const { name } = route.params;
  const { data, isLoading, error } = useFetchDetails(name);

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: Could not load data</Text>
      </View>
    );
  }

  return (
    <Layout>
      <View style={styles.container}>
        {isLoading && !error ? (
          <Text>Loading...</Text>
        ) : (
          <View>
            <Image
              source={{ uri: data.sprites.front_default }}
              style={styles.pokeImage}
            />
            <CText>Name: {startCase(data.name)}</CText>
            <CText>Weight: {data.weight}</CText>
            <CText>Height: {data.height}</CText>
            <CText>
              Abilities:{" "}
              {data.abilities.map((ability) => ability.ability.name).join(", ")}
            </CText>
          </View>
        )}
      </View>
    </Layout>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  pokeImage: {
    width: 100,
    height: 100,
  },
});
