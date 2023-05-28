import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import TopBar from "../src/components/TopBar";

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

describe.only("<TopBar />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should navigate back when TouchableOpacity is pressed", async () => {
    const { getByText } = render(<TopBar />);

    const backButton = getByText("Back");
    fireEvent.press(backButton);

    expect(mockNavigation.goBack).toHaveBeenCalled();
  });
});
