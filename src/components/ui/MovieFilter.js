import React, { useRef, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import colors from "../../config/colors";

const MovieFilter = ({
  onClose,
  enablePanDownToClose = true,
  children,
  options,
  renderFilter,
  onChange,
  error,
}) => {
  const bottomSheetRef = useRef(null);
  const [index, setIndex] = useState(-1);
  const [selected, setSelected] = useState(options?.[0]);

  return (
    <View style={styles.container}>
      <View style={styles.page}>
        <View style={styles.filters}>
          {!!renderFilter &&
            renderFilter(
              <TextInput
                value={selected}
                style={{
                  ...styles.dropdown,
                  ...(!!error ? styles.dropdownError : {}),
                }}
                onPress={() => {
                  setIndex(0);
                }}
                readOnly
              />
            )}
        </View>
        {children}
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={index}
        onClose={onClose}
        onChange={setIndex}
        snapPoints={["30%", "50%", "100%"]}
        enablePanDownToClose={enablePanDownToClose}
      >
        <BottomSheetView style={styles.contentContainer}>
          <FlatList
            data={options}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={
                  selected === item
                    ? styles.dropdownItemSelected
                    : styles.dropdownItem
                }
                onPress={() => {
                  bottomSheetRef.current?.forceClose?.();
                  setSelected(item);
                  setIndex(-1);
                  onChange(item);
                }}
              >
                <Text
                  style={
                    selected === item ? styles.dropdownItemTextSelected : {}
                  }
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
          />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    gap: 20,
  },
  contentContainer: {
    flex: 1,
    padding: 8,
  },
  page: {
    paddingTop: 16,
    display: "flex",
    gap: 20,
  },
  filters: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  dropdown: {
    padding: 4,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 4,
    flex: 1,
  },
  dropdownError: {
    borderWidth: 1,
    borderColor: "red",
  },
  dropdownItemSelected: {
    backgroundColor: colors.darkBlue,
    padding: 8,
    borderRadius: 6,
    paddingLeft: 16,
    color: colors.white,
  },
  dropdownItem: {
    padding: 8,
    paddingLeft: 16,
    borderRadius: 6,
    color: colors.white,
  },
  dropdownItemTextSelected: {
    color: colors.white,
  },
});

export default MovieFilter;
