import { render, waitFor } from "@testing-library/react-native";
import React from "react";
import useFetchList from "../src/hooks/useFetchList";
import DashboardScreen from "../src/screens/DashboardScreen";

jest.mock("react-native-safe-area-context", () => ({
  SafeAreaView: ({ children }) => <>{children}</>,
}));

jest.mock("../src/hooks/useFetchList");

jest.mock("@expo/vector-icons/Ionicons", () => "Icon");

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useRoute: () => ({ name: "Details" }),
  useNavigation: () => mockNavigation,
}));

const mockNavigation = {
  navigate: jest.fn(),
};

describe("<DashboardScreen />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("displays loading state", () => {
    (useFetchList as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });
    const { getByText } = render(
      <DashboardScreen navigation={mockNavigation} />
    );
    expect(getByText("Loading...")).toBeDefined();
  });

  it("displays error state", () => {
    (useFetchList as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      error: "Error message",
    });
    const { getByText } = render(
      <DashboardScreen navigation={mockNavigation} />
    );
    expect(getByText("Error: Could not load data")).toBeDefined();
  });

  it("displays list of items when data is available", async () => {
    (useFetchList as jest.Mock).mockReturnValue({
      data: { results: [{ name: "Item 1" }, { name: "Item 2" }] },
      isLoading: false,
      error: null,
    });
    const { getByText } = render(
      <DashboardScreen navigation={mockNavigation} />
    );
    await waitFor(() => expect(getByText("1. Item 1")).toBeDefined());
    expect(getByText("2. Item 2")).toBeDefined();
  });
});
