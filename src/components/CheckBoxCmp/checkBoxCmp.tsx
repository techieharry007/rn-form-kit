import * as React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import TextComp from "../TextCmp/textCmp";
import { scale } from "../../utils/dimensions";
import useRTLStyles from "../../styles";
import { CheckboxProps, Option } from "../../types";

const CheckboxField = ({
  value = [],
  option,
  handleOnChange,
  inputBoxStyle,
  checkboxStyle,
  selectedBoxStyle,
  label,
  labelStyle,
  required,
  error,
  theme='light',
  optionLabelStyle
}: CheckboxProps) => {
  const [selectedOption, setSelectedOption] = React.useState<string[]>(value);
  const styles = useRTLStyles(false, theme);

  const toggleSelection = (val: string) => {
    if (selectedOption.includes(val)) {
      // remove
      setSelectedOption(selectedOption.filter((item) => item !== val));
      handleOnChange(selectedOption.filter((item) => item !== val));
    } else {
      // add
      setSelectedOption([...selectedOption, val]);
      handleOnChange([...selectedOption, val]);
    }
  };
  if(!option ||!option?.length) return null

  return (
    <>
      {/* Label */}
      <View style={styles.labelLayout}>
        <TextComp text={label} style={labelStyle} />
        {required && <TextComp text="*" style={styles.requiredStar} />}
      </View>

      {/* Options */}
      <View style={[inputBoxStyle]}>
        {option.map((opt:Option) => {
          const selected = selectedOption.includes(opt?.value);

          return (
            <TouchableOpacity
              key={opt.value}
              onPress={() => toggleSelection(opt.value)}
              style={style.layout}
            >
              {/* Square Box */}
              <View style={[style.box, checkboxStyle]}>
                {selected && (
                  <View style={[style.selectedBox, selectedBoxStyle]} />
                )}
              </View>

              {/* Label */}
              <TextComp text={opt.label} style={[{ marginLeft: 10 },optionLabelStyle]} />
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Error */}
      <TextComp text={error} style={styles.error} />
    </>
  );
};

export default CheckboxField;

const style = StyleSheet.create({
  layout: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  box: {
    width: scale(18),
    height: scale(18),
    borderRadius: scale(4), // square look
    borderWidth: 2,
    borderColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedBox: {
    width: scale(10),
    height: scale(10),
    backgroundColor: "#333",
  },
});
