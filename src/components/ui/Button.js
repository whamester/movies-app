import { StyleSheet, Text, TouchableHighlight } from "react-native";
import colors from "../../config/colors";

const Button = ({ onPress, children }) => {
  return (
    <TouchableHighlight style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.darkBlue,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    borderRadius: 4,
    flex: 1,
  },
  buttonText: {
    fontSize: 14,
    color: colors.white,
  },
});

export default Button;
