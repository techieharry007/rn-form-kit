import * as React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import TextComp from "../TextCmp/textCmp";
import { scale } from "../../utils/dimensions";
import useRTLStyles from "../../styles";
import { RadioFieldProps } from "../../types";

const RadioField = ({
  value,
  option,
  handleOnChange,
  inputBoxStyle,
  selectedBtnStyle,
  radioBtnStyle,
  label,
  labelStyle,
  required,
  error,
  theme = "light",
}: RadioFieldProps) => {
  const styles = useRTLStyles(false, theme);
  if (!option || !option?.length) return null;
  return (
    <>
      <View style={styles.labelLayout}>
        <TextComp text={label} style={labelStyle} />
        {required ? <TextComp text="*" style={styles.requiredStar} /> : null}
      </View>

      <View style={[inputBoxStyle && inputBoxStyle]}>
        {option.map((opt) => {
          const selected = value === opt.value;

          return (
            <TouchableOpacity
              key={opt.value}
              onPress={() => handleOnChange(opt.value)}
              style={[style.layout]}
            >
              {/* Circle */}
              <View style={[style.itemStyle, radioBtnStyle && radioBtnStyle]}>
                {selected && (
                  <View
                    style={[
                      style.selectedItem,
                      selectedBtnStyle && selectedBtnStyle,
                    ]}
                  />
                )}
              </View>

              {/* Label */}
              <TextComp text={opt.label} style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          );
        })}
      </View>
      <TextComp text={error} style={styles.error} />
    </>
  );
};
export default RadioField;

const style = StyleSheet.create({
  layout: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  selectedItem: {
    width: scale(10),
    height: scale(10),
    borderRadius: scale(5),
    backgroundColor: "#333",
  },
  itemStyle: {
    width: scale(16),
    height: scale(16),
    borderRadius: scale(10),
    borderWidth: 2,
    borderColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
});
