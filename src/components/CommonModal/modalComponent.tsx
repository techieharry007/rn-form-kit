import {useEffect } from "react";
import * as React from "react";
import {
  Modal,
  View,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Colors } from "../../utils/colors";
import { moderateScale } from "../../utils/dimensions";
import { ModalCompProps } from "@/types";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");



const ModalComp: React.FC<ModalCompProps> = ({
  isVisible,
  onClose,
  children,
  containerStyle,
  backdropOpacity = 0.5,
  animationDuration = 300,
  theme = "light",
}) => {
  const styles = useStyles(theme);

  // 🔥 animation values
  const translateY = useSharedValue(SCREEN_HEIGHT);
  const backdrop = useSharedValue(0);

  useEffect(() => {
    if (isVisible) {
      translateY.value = withTiming(0, { duration: animationDuration });
      backdrop.value = withTiming(backdropOpacity, {
        duration: animationDuration,
      });
    } else {
      translateY.value = withTiming(SCREEN_HEIGHT, {
        duration: animationDuration,
      });
      backdrop.value = withTiming(0, { duration: animationDuration });
    }
  }, [isVisible]);

  // 🔥 animated styles
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const backdropStyle = useAnimatedStyle(() => ({
    backgroundColor: `rgba(0,0,0,${backdrop.value})`,
  }));

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="none"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      {/* Backdrop */}
      <Pressable style={StyleSheet.absoluteFill} onPress={onClose}>
        <Animated.View style={[styles.backdrop, backdropStyle]} />
      </Pressable>

      {/* Bottom Sheet */}
      <Animated.View style={[styles.container, animatedStyle, containerStyle]}>
        <View style={styles.handle} />
        {children}
      </Animated.View>
    </Modal>
  );
};

export default ModalComp;

const useStyles = (theme: 'light'|'dark') => {
  const colors = Colors[theme ?? "light"];

  return StyleSheet.create({
    backdrop: {
      ...StyleSheet.absoluteFillObject,
    },
    container: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      backgroundColor: colors.background,
      borderTopLeftRadius: moderateScale(24),
      borderTopRightRadius: moderateScale(24),
      padding: moderateScale(20),
      paddingTop: moderateScale(12),
      minHeight: moderateScale(100),

      shadowColor: colors.text,
      shadowOffset: { width: 0, height: -4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
    },
    handle: {
      width: moderateScale(40),
      height: moderateScale(4),
      backgroundColor: colors.textSecondary,
      opacity: 0.3,
      borderRadius: moderateScale(2),
      alignSelf: "center",
      marginBottom: moderateScale(16),
    },
  });
};