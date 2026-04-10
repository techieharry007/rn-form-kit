import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import { ViewStyle } from "react-native";

type Props = {
  size?: number;
  color?: string;
  direction?: "left" | "right";
  style?: ViewStyle;
};

const RightIcon = ({
  size = 24,
  color = "#000",
  direction = "right",
  style,
}: Props) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      style={[
        direction === "right" && { transform: [{ scaleX: -1 }] },
        style,
      ]}
    >
      <G>
        <Path
          d="M390.627 54.627 189.255 256l201.372 201.373a32 32 0 1 1-45.254 45.254l-224-224a32 32 0 0 1 0-45.254l224-224a32 32 0 0 1 45.254 45.254z"
          fill={color}
        />
      </G>
    </Svg>
  );
};

export default React.memo(RightIcon);