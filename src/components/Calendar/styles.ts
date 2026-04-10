import { StyleSheet, Dimensions } from "react-native";
import { useMemo } from "react";
import { commonColors, ThemeType } from "../../utils/colors";
import { moderateScale, verticalScale } from "../../utils/dimensions";
import { scale } from "../../utils/dimensions";
import { Colors } from "../../utils/colors";
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const useRTLStyles = (isRTL: boolean, theme: ThemeType) => {
  const colors = Colors[theme ?? "light"];

  return useMemo(
    () =>
      StyleSheet.create({
        labelLayout:{ flexDirection: "row", alignItems: "center" },
        requiredStar:{ color: "red", paddingLeft: 2 },
        error: {
            fontSize: moderateScale(12),
            color: colors.red,
            position: 'absolute',
            bottom: -15,
          },
        dateWrapper: {
          paddingLeft: scale(12),
          borderRadius: 6,
          height: verticalScale(50),
          justifyContent: "center",
          backgroundColor: colors.background,
        },
        container: {
          flex: 1,
          backgroundColor: colors.background,
        },
        scrollContent: {
          paddingBottom: verticalScale(40),
        },
        header: {
          flexDirection: isRTL ? "row-reverse" : "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          paddingHorizontal: moderateScale(16),
          paddingVertical: verticalScale(16),
          backgroundColor: commonColors.primary,
        },
        headerTextWrapper: {
          flex: 1,
        },
        themeSwitch: {
          marginTop: verticalScale(4),
        },
        headerTitle: {
          fontSize: moderateScale(24),
          color: commonColors.white,
          textAlign: isRTL ? "right" : "left",
        },
        headerSubtitle: {
          fontSize: moderateScale(14),
          color: commonColors.white,
          marginTop: moderateScale(4),
          textAlign: isRTL ? "right" : "left",
        },
        cardWrapper: {
          paddingHorizontal: moderateScale(16),
          marginTop: verticalScale(8),
        },
        card: {
          backgroundColor: colors.surface,
          borderRadius: moderateScale(12),
          padding: moderateScale(16),
          borderWidth: 1,
          borderColor: colors.inputBorder,
        },
        inputWrapper: {
          flexDirection: isRTL ? "row-reverse" : "row",
          alignItems: "center",
          backgroundColor: colors.inputBackground,
          borderWidth: 1,
          borderColor: colors.inputBorder,
          borderRadius: moderateScale(8),
          paddingHorizontal: moderateScale(12),
          marginBottom: moderateScale(12),
        },
        icon: {
          marginRight: isRTL ? 0 : moderateScale(8),
          marginLeft: isRTL ? moderateScale(8) : 0,
        },
        input: {
          flex: 1,
          fontSize: moderateScale(12),
          color: colors.inputText,
          paddingVertical: moderateScale(12),
          textAlign: isRTL ? "right" : "left",
        },
        row: {
          flexDirection: isRTL ? "row-reverse" : "row",
          gap: moderateScale(12),
          marginBottom: moderateScale(12),
        },
        halfInputWrapper: {
          flex: 0.7,
          flexDirection: isRTL ? "row-reverse" : "row",
          alignItems: "center",
          backgroundColor: colors.inputBackground,
          borderWidth: 1,
          borderColor: colors.inputBorder,
          borderRadius: moderateScale(8),
          paddingHorizontal: moderateScale(12),
        },
        halfPickerWrapper: {
          flex: 0.3,
          flexDirection: isRTL ? "row-reverse" : "row",
          alignItems: "center",
          backgroundColor: colors.inputBackground,
          borderWidth: 1,
          borderColor: colors.inputBorder,
          borderRadius: moderateScale(8),
          paddingHorizontal: moderateScale(12),
        },
        picker: {
          flex: 1,
          color: colors.inputText,
          fontSize: moderateScale(14),
        },
        searchButton: {
          flexDirection: isRTL ? "row-reverse" : "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.buttonPrimary,
          borderRadius: moderateScale(8),
          paddingVertical: moderateScale(14),
          marginTop: moderateScale(8),
          gap: moderateScale(8),
        },
        searchButtonDisabled: {
          opacity: 0.6,
        },
        searchButtonLoader: {
          marginRight: isRTL ? 0 : moderateScale(8),
          marginLeft: isRTL ? moderateScale(8) : 0,
        },
        searchText: {
          fontSize: moderateScale(16),
          color: commonColors.white,
        },
        routesSection: {
          paddingHorizontal: moderateScale(16),
          marginTop: verticalScale(24),
          paddingBottom: verticalScale(24),
        },
        routesTitle: {
          fontSize: moderateScale(18),
          color: colors.text,
          marginBottom: moderateScale(12),
          textAlign: isRTL ? "right" : "left",
        },
        routeCard: {
          flexDirection: isRTL ? "row-reverse" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: colors.surface,
          borderRadius: moderateScale(8),
          padding: moderateScale(16),
          marginBottom: moderateScale(8),
          borderWidth: 1,
          borderColor: colors.inputBorder,
        },
        routeText: {
          flexDirection: isRTL ? "row-reverse" : "row",
          alignItems: "center",
          flex: 1,
          gap: moderateScale(8),
        },
        routePrice: {
          fontSize: moderateScale(14),
          color: colors.text,
          marginStart: isRTL ? 0 : moderateScale(8),
          marginEnd: isRTL ? moderateScale(8) : 0,
        },
        modalContainer: {
          height: SCREEN_HEIGHT,
          flex: 1,
        },
        modalHeader: {
          flexDirection: isRTL ? "row-reverse" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: verticalScale(12),
        },
        modalTitle: {
          flex: 1,
          fontSize: moderateScale(18),
          color: colors.text,
          textAlign: isRTL ? "right" : "left",
        },
        modalCloseButton: {
          padding: moderateScale(8),
        },
        locationModalContent: {
          flex: 1,
        },
        locationModalTitle: {
          fontSize: moderateScale(18),
          color: colors.text,
          marginBottom: verticalScale(12),
          textAlign: isRTL ? "right" : "left",
        },
        locationSearchWrapper: {
          flexDirection: isRTL ? "row-reverse" : "row",
          alignItems: "center",
          backgroundColor: colors.inputBackground,
          borderWidth: 1,
          borderColor: colors.inputBorder,
          borderRadius: moderateScale(8),
          paddingHorizontal: moderateScale(12),
          marginBottom: verticalScale(12),
        },
        locationSearchIcon: {
          marginRight: isRTL ? 0 : moderateScale(8),
          marginLeft: isRTL ? moderateScale(8) : 0,
        },
        locationSearchInput: {
          flex: 1,
          fontSize: moderateScale(14),
          color: colors.text,
          paddingVertical: moderateScale(12),
          textAlign: isRTL ? "right" : "left",
        },
        locationList: {
          flex: 1,
        },
        locationItem: {
          flexDirection: isRTL ? "row-reverse" : "row",
          alignItems: "center",
          paddingVertical: moderateScale(12),
          paddingHorizontal: moderateScale(4),
          borderBottomWidth: 1,
          borderBottomColor: colors.inputBorder,
        },
        locationItemIcon: {
          marginRight: isRTL ? 0 : moderateScale(10),
          marginLeft: isRTL ? moderateScale(10) : 0,
        },
        locationItemText: {
          fontSize: moderateScale(15),
          color: colors.text,
          flex: 1,
        },
        locationEmpty: {
          paddingVertical: verticalScale(24),
          alignItems: "center",
        },
        locationEmptyText: {
          fontSize: moderateScale(14),
          color: colors.textSecondary,
        },
        calendarHeader: {
          flexDirection: isRTL ? "row-reverse" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: verticalScale(16),
        },
        calendarNavButton: {
          padding: moderateScale(8),
        },
        calendarMonthTitle: {
          fontSize: moderateScale(18),
          color: colors.text,
        },
        weekdayRow: {
          flexDirection: isRTL ? "row-reverse" : "row",
          marginBottom: verticalScale(8),
        },
        weekdayCell: {
          flex: 1,
          alignItems: "center",
        },
        weekdayLabel: {
          fontSize: moderateScale(12),
          color: colors.textSecondary,
        },
        calendarGrid: {
          flex: 1,
        },
        calendarRow: {
          flexDirection: isRTL ? "row-reverse" : "row",
          marginBottom: verticalScale(6),
        },
        calendarDayCell: {
          flex: 1,
          aspectRatio: 1,
          maxHeight: 44,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: moderateScale(8),
          marginHorizontal: 2,
        },
        calendarDayCellMuted: {
          opacity: 0.35,
        },
        calendarDayCellToday: {
          borderWidth: 1,
          borderColor: commonColors.primary,
        },
        calendarDayCellSelected: {
          backgroundColor: commonColors.primary,
        },
        calendarDayText: {
          fontSize: moderateScale(15),
          color: colors.text,
        },
        calendarDayTextMuted: {
          color: colors.textSecondary,
        },
        calendarDayTextSelected: {
          color: commonColors.white,
        },
      }),
    [isRTL, theme, colors],
  );
};

export default useRTLStyles;
