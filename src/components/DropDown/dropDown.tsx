import { Colors } from "../../utils/colors";
import { scale, verticalScale } from "../../utils/dimensions";
import { useState, useCallback } from "react";
import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import TextComp from "../TextCmp/textCmp";
import useRTLStyles from "../../styles";
import ModalComp from "../CommonModal/modalComponent";
type Option = {
  label: string;
  value: string;
};

type Props = {
  option: Option[];
  value: string | null;
  handleOnChange: (value: string) => void;
  // Custom styles
  inputBoxStyle?: ViewStyle;
  selectedTextStyle?: TextStyle;
  optionStyle?: ViewStyle;
  optionTextStyle?: TextStyle;
  theme?: "light" | "dark";
  mode?: "single" | "range";
  label?: string;
  labelStyle?: ViewStyle;
  required?: boolean;
  error?: string;
};

const ITEM_HEIGHT = verticalScale(50);
const MIN_VISIBLE_ITEMS = 4;
const MAX_HEIGHT = verticalScale(300);
const CustomDropdown = ({
  option,
  value,
  handleOnChange,
  inputBoxStyle,
  selectedTextStyle,
  optionStyle,
  optionTextStyle,
  theme = "light",
  mode = "single",
  label,
  labelStyle,
  required,
  error,
}: Props) => {
  if (!option?.length || option === undefined) return null;

  const [open, setOpen] = useState(false);

  const style = useRTLStyles(false, theme);
  const colors = Colors[theme];

  const toggleDropdown = useCallback(() => {
    setOpen((prev) => !prev);
  }, [option.length]);

  const selectedItem = option?.find((item) => item.value === value);
  const txtColor = selectedItem?.label ? colors.black : colors.inputPlaceholder;

  const handleSelect = (val: string) => {
    handleOnChange(val);
    toggleDropdown();
  };

  const renderItem = (item: Option) => (
    <TouchableOpacity
      style={[styles.option, { borderColor: colors.inputBorder }, optionStyle]}
      onPress={() => handleSelect(item.value)}
    >
      <Text
        style={[
          styles.optionText,
          { color: colors.inputText },
          optionTextStyle,
        ]}
      >
        {item.label}
      </Text>
    </TouchableOpacity>
  );
  const WIDTH_PER = mode === "range" ? "45%" : "100%";
  return (
    <>
      <View style={{ width: WIDTH_PER }}>
        {/* Selected Box */}
        <View>
          <View style={style.labelLayout}>
            <TextComp text={label} style={labelStyle} />
            {required ? <TextComp text="*" style={style.requiredStar} /> : null}
          </View>
          <TouchableOpacity
            style={[
              styles.selectedBox,
              { backgroundColor: colors.background },
              inputBoxStyle,
            ]}
            onPress={toggleDropdown}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.selectedText,
                { color: txtColor },
                selectedTextStyle,
              ]}
            >
              {selectedItem?.label || "Select Time"}
            </Text>
          </TouchableOpacity>
        </View>

        <ModalComp isVisible={open} onClose={toggleDropdown}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.backdrop}
            onPress={toggleDropdown}
          >
            <TouchableOpacity
              activeOpacity={1}
              onPress={(e) => e.stopPropagation()}
              style={[
                styles.bottomSheet,
                { backgroundColor: colors.background },
                {
                  maxHeight:
                    option.length < MIN_VISIBLE_ITEMS
                      ? option.length * ITEM_HEIGHT
                      : MAX_HEIGHT,
                },
              ]}
            >
              <ScrollView
                scrollEnabled={option.length >= MIN_VISIBLE_ITEMS}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
              >
                {option.map((item) => (
                  <View key={item.value}>{renderItem(item)}</View>
                ))}
              </ScrollView>
            </TouchableOpacity>
          </TouchableOpacity>
        </ModalComp>

        <TextComp text={error} style={style.error} />
      </View>
    </>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  selectedBox: {
    paddingLeft: scale(12),
    borderRadius: 8,
    height: ITEM_HEIGHT,
    justifyContent: "center",
  },
  selectedText: {
    fontSize: scale(15),
  },
  backdrop: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "transparent",
  },
  bottomSheet: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: verticalScale(16),
    overflow: "hidden",
  },
  option: {
    padding: 12,
    borderBottomWidth: 0.5,
  },
  optionText: {
    fontSize: scale(15),
  },
});
