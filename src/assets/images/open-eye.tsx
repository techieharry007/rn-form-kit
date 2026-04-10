import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { ViewStyle } from "react-native";

type Props = {
  size?: number;
  color?: string;
  style?: ViewStyle;
  onPress?:()=>void

};

const OpenEye = ({
  size = 24,
  color = "#000",
  style,
  onPress
}: Props) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      style={style}
      onPress={onPress}
    >
      <Path
        d="M24 39C6 39 0 24 0 24S6 9 24 9s24 15 24 15-6 15-24 15zm0-24c-4.971 0-9 4.029-9 9s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9zm0 15c-3.312 0-6-2.688-6-6h6l-4.242-4.242A5.97 5.97 0 0 1 24 18c3.312 0 6 2.688 6 6s-2.688 6-6 6z"
        fill={color}
      />
    </Svg>
  );
};

export default React.memo(OpenEye);