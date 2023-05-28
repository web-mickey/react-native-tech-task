import { render, waitFor } from "@testing-library/react-native";
import React from "react";
import useFetchDetails from "../src/hooks/useFetchDetails";
import DetailsScreen from "../src/screens/DetailsScreen";

jest.mock("react-native-safe-area-context", () => ({
  SafeAreaView: ({ children }) => <>{children}</>,
}));

jest.mock("../src/hooks/useFetchDetails");

jest.mock("@expo/vector-icons/Ionicons", () => "Icon");

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useRoute: () => ({ name: "Details" }),
  useNavigation: () => mockNavigation,
}));

const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

const mockRoute = {
  name: "Details",
  params: {
    name: "Item 1",
  },
};

describe.only("<DetailsScreen />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("displays loading state", () => {
    (useFetchDetails as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });
    const { getByText } = render(<DetailsScreen route={mockRoute} />);
    expect(getByText("Loading...")).toBeDefined();
  });

  it("displays error state", () => {
    (useFetchDetails as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      error: "Error message",
    });
    const { getByText } = render(<DetailsScreen route={mockRoute} />);
    expect(getByText("Error: Could not load data")).toBeDefined();
  });

  it("displays list of items when data is available", async () => {
    (useFetchDetails as jest.Mock).mockReturnValue({
      data: {
        name: "Item 1",
        weight: 50,
        height: 50,
        abilities: [{ ability: { name: "testability" } }],
        sprites: { frontDefault: "test" },
      },
      isLoading: false,
      error: null,
    });
    const { getByText } = render(<DetailsScreen route={mockRoute} />);
    await waitFor(() => expect(getByText("Name: Item 1")).toBeDefined());
    expect(getByText("Weight: 50")).toBeDefined();
  });
});
