import * as React from 'react'
import { Text, TextProps, StyleSheet } from "react-native";
import { moderateScale } from "../../utils/dimensions";
import { Colors } from "../../utils/colors";
interface TextCompProps extends TextProps {
  text?: string;
  values?: Record<string, any>;
  style?: any;
  children?: React.ReactNode;
  isDynamic?: boolean;
  theme?: "light" | "dark";
}

const TextComp: React.FC<TextCompProps> = ({
  text,
  style,
  children,
  values,
  isDynamic = false,
  theme = "light",
  ...props
}) => {  
  const colors = Colors[theme];
  const styles = useRTLStyles(false);
  // if (text && !isDynamic) {
  //   return (
  //     <Text style={[styles.text, { color: colors.text }, style]} {...props}>
  //       {String(values)}
  //     </Text>
  //   );
  // }

  // If no text, just render the children directly
  return (
    <Text style={[styles.text, { color: colors.text }, style]} {...props}>
      {text}
    </Text>
  );
};

const useRTLStyles = (isRTL: boolean) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: moderateScale(14),
      textAlign: isRTL ? "right" : "left",
    },
  });
  return styles;
};
export default React.memo(TextComp);
