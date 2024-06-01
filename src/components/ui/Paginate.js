import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import colors from "../../config/colors";

const Paginate = ({ total, setPage, page = 1 }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          if (page > 1) {
            setPage(page - 1);
          }
        }}
      >
        <Text style={styles.buttonText}>{`<`}</Text>
      </TouchableHighlight>
      <Text style={styles.buttonText}>
        {page} {!!total ? `/ ${total}` : ""}
      </Text>
      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          if (total > page && !!total) {
            setPage(page + 1);
          }
        }}
      >
        <Text style={styles.buttonText}>{`>`}</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    paddingHorizontal: 20,
    alignItems: "center",
    height: 100,
    paddingBottom: 40,
  },
  button: {
    backgroundColor: colors.lightGray,
    width: "auto",
    flex: 1,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 30,
    color: colors.darkBlue,
  },
});

export default Paginate;
