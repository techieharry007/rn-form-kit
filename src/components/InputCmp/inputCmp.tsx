import { View, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import * as React from "react";
import { scale, verticalScale } from "../../utils/dimensions";
import { Colors } from "../../utils/colors";
import { TextInputType } from "../../types";
import { OpenEye, CloseEye } from "../../assets/icons";
import TextComp from "../TextCmp/textCmp";
import useRTLStyles from "../../styles";
const TextInputField: React.FC<TextInputType> = React.memo(
  ({
    placeholder,
    inputBoxStyle,
    value,
    handleOnChange,
    inputType,
    theme = "light",
    eyeIconProps,
    required,
    label,
    labelStyle,
    error,
    inputProps,
    multilineHeight
  }) => {
    const isMultiline = inputType === "multiline";
    const isPassword = inputType === "password";
    const isPhone = inputType === "phone";
    const colors = Colors[theme];
    const eyeSize = eyeIconProps?.size ? eyeIconProps.size : scale(20);

    const style = useRTLStyles(false, theme);

    const [showPass, setShowPass] = useState(isPassword);

    return (
      <View style={{ position: "relative" }}>
        <View style={style.labelLayout}>
          <TextComp text={label} style={labelStyle} />
          {required ? <TextComp text="*" style={style.requiredStar} /> : null}
        </View>
        <TextInput
          placeholder={placeholder}
          style={[
            styles.input,
            inputBoxStyle,
            isMultiline && {
              height: multilineHeight ?? verticalScale(120),
              textAlignVertical: inputProps?.textAlignVertical??'top',
            },
            {
              backgroundColor: colors.background,
              color: colors.black,
            },
          ]}
          value={value}
          onChangeText={handleOnChange}
          placeholderTextColor={colors.inputPlaceholder}
          multiline={isMultiline}
          maxLength={inputProps?.maxLength ?? (isMultiline ? 250 : 50)}
          keyboardType={isPhone ? "number-pad" : "default"}
          secureTextEntry={showPass}
          {...inputProps}
        />
        {isPassword ? (
          <View style={styles.iconWrapper}>
            {!showPass ? (
              <CloseEye onPress={() => setShowPass(!showPass)} size={eyeSize} />
            ) : (
              <OpenEye onPress={() => setShowPass(!showPass)} size={eyeSize} />
            )}
          </View>
        ) : null}
        <TextComp text={error} style={style.error} />
      </View>
    );
  },
);
export default TextInputField;
const styles = StyleSheet.create({
  iconWrapper: {
    position: "absolute",
    top: verticalScale(30),
    right: scale(10),
  },
  input: {
    fontSize: scale(15),
    paddingLeft: scale(12),
    borderRadius: 6,
    height: verticalScale(50),
    justifyContent: "center",
  },
  iconPosition: {
    position: "absolute",
    top: verticalScale(15),
    right: scale(15),
  },
});
