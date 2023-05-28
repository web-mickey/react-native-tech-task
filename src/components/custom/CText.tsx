import { StyleSheet, Text } from "react-native";

type CTextProps = {
  children: React.ReactNode;
  header?: boolean;
};

const CText = ({ children, header = false }: CTextProps) => {
  return <Text style={styles(header).text}>{children}</Text>;
};

export default CText;

const styles = (header: boolean) =>
  StyleSheet.create({
    text: {
      fontSize: header ? 20 : 16,
    },
  });
