import { View } from "react-native";
import * as React from "react";
import { useErrorHandler } from "./hooks/errorHandler";
import { verticalScale } from "./utils/dimensions";
import { Fields, FormValue, InputProps } from "./types";
import useRTLStyles from "./styles";
import { Input, Date, Time, Checkbox, Radio } from "./index";

const FormBuilder = ({
  input,
  setInput,
  fields,
  theme = "light",
  formError,
}: InputProps) => {
  if (!fields || !fields.length) return null;
  const inputValues = input as Record<string, FormValue>;

  const { error, setError } = useErrorHandler();

  const styles = useRTLStyles(false, theme);

  const handleOnChange = (
    key: string,
    value: string|string[],
    type?: "start" | "end",
  ) => {
    setInput((prev) => {
      // if array field
      if (Array.isArray(prev[key])) {
        return {
          ...prev,
          [key]: value,
        };
      }
      // 🔥 if range field
      if (typeof prev[key] === "object") {
        return {
          ...prev,
          [key]: {
            ...prev[key],
            [type!]: value,
          },
        };
      }

      // normal field
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  React.useEffect(() => {
    formError && Object.keys(formError).length && setError(formError);
  }, [formError]);

  return (
    <View style={styles.inputLayout}>
      {fields.map((el: Fields, index: number) => {
        const key = el?.name;
        const uniqueKey = index.toString() + "_id";
        if (!key || typeof key !== "string") {
          if (typeof __DEV__ !== "undefined" && __DEV__) {
            console.warn("[rn-form-kit] Skipping field with invalid name:", el);
          }
          return null;
        }

        const fieldError = Object.keys(error ?? {}).length ? error[key] : "";
        const fieldValue = inputValues[key];
        const componentProps = (el as any)?.componentProps ?? {};

        if (!(key in inputValues)) {
          if (typeof __DEV__ !== "undefined" && __DEV__) {
            console.warn(
              `[rn-form-kit] Field name "${key}" not found in input state. Rendering with defaults.`,
            );
          }
        }

        const commonProps = {
          placeholder: el.placeholder,
          handleOnChange: (e: string | string[], keyType?: "start" | "end") => {
            handleOnChange(key, e, keyType);
          },
          theme,
          label: el.label,
          required: el.required,
          error: fieldError,
        };

        if (el.type === "input" || el.type === "multiline" || el.type === "password") {
          return (
            <View key={uniqueKey} style={{ marginVertical: verticalScale(10) }}>
              <Input
                {...componentProps}
                {...commonProps}
                inputType={el.type}
                value={typeof fieldValue === "string" ? fieldValue : ""}
                {...el?.inputProps}
              />
            </View>
          );
        }

        if (el.type === "radio") {
          if (!Array.isArray((componentProps as any)?.option)) {
            if (typeof __DEV__ !== "undefined" && __DEV__) {
              console.warn(
                `[rn-form-kit] Skipping radio "${key}" because componentProps.option is missing/invalid.`,
              );
            }
            return null;
          }
          return (
            <View key={uniqueKey} style={{ marginVertical: verticalScale(10) }}>
              <Radio
                {...componentProps}
                {...commonProps}
                value={typeof fieldValue === "string" ? fieldValue : ""}
              />
            </View>
          );
        }

        if (el.type === "checkbox") {
          if (!Array.isArray((componentProps as any)?.option)) {
            if (typeof __DEV__ !== "undefined" && __DEV__) {
              console.warn(
                `[rn-form-kit] Skipping checkbox "${key}" because componentProps.option is missing/invalid.`,
              );
            }
            return null;
          }
          return (
            <View key={uniqueKey} style={{ marginVertical: verticalScale(10) }}>
              <Checkbox
                {...componentProps}
                {...commonProps}
                value={Array.isArray(fieldValue) ? fieldValue : []}
              />
            </View>
          );
        }

        if (el.type === "time") {
          const timeValue =
            fieldValue && typeof fieldValue === "object" && !Array.isArray(fieldValue)
              ? (fieldValue as { start: string; end: string })
              : { start: "", end: "" };
          return (
            <View key={uniqueKey} style={{ marginVertical: verticalScale(10) }}>
              <Time
                {...componentProps}
                {...commonProps}
                value={timeValue}
              />
            </View>
          );
        }
        return (
          <View key={uniqueKey} style={{ marginVertical: verticalScale(10) }}>
            <Date {...commonProps} {...componentProps} />
          </View>
        );
      })}
    </View>
  );
};

export default FormBuilder;
