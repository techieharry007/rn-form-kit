import { View } from "react-native";
import CustomDropdown from "../DropDown/dropDown";
import { TimeFieldProps } from "../../types";
import useRTLStyles from "../../styles";
import { timeOptions24Hr } from "../../utils/constants";
import * as React from "react";

const TimeCmp: React.FC<TimeFieldProps> = ({
  option = timeOptions24Hr,
  value,
  handleOnChange,
  mode = "single",
  theme = "light",
  inputBoxStyle,
  selectedTextStyle,
  optionStyle,
  optionTextStyle,
  label,
  labelStyle,
  required,
  error,
}) => {
  const styles = useRTLStyles(false, theme);
  if (mode === "single")
    return (
      <CustomDropdown
        option={option}
        handleOnChange={(e) => handleOnChange(e, "start")}
        value={value?.start}
        mode={mode}
        inputBoxStyle={inputBoxStyle}
        selectedTextStyle={selectedTextStyle}
        optionStyle={optionStyle}
        optionTextStyle={optionTextStyle}
        label={"Start Time"}
        required={required}
        labelStyle={labelStyle}
        error={error}
      />
    );
  if (mode === "range")
    return (
      <View style={[styles.layout]}>
        <CustomDropdown
          option={option}
          handleOnChange={(e) => handleOnChange(e, "start")}
          value={value?.start}
          mode={mode}
          inputBoxStyle={inputBoxStyle}
          selectedTextStyle={selectedTextStyle}
          optionStyle={optionStyle}
          optionTextStyle={optionTextStyle}
          label={"Start Time"}
          required={required}
          labelStyle={labelStyle}
          error={error}
        />
        <CustomDropdown
          option={option}
          handleOnChange={(e) => handleOnChange(e, "end")}
          value={value?.end}
          mode={mode}
          inputBoxStyle={inputBoxStyle}
          selectedTextStyle={selectedTextStyle}
          optionStyle={optionStyle}
          optionTextStyle={optionTextStyle}
          label={"End Time"}
          required={required}
          labelStyle={labelStyle}
        />
      </View>
    );
  else return null;
};

export default TimeCmp;
