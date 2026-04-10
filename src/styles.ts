import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Colors, commonColors } from './utils/colors';
import { height, moderateScale, scale, verticalScale } from './utils/dimensions';

const useRTLStyles = (isRTL: boolean, theme: 'light'|'dark') => {
    const colors = Colors[theme ?? 'light'];
   
    return useMemo(() => StyleSheet.create({
      modalContainer: {
        height: height,
        flex: 1,
      },
      inputLayout:{ flex: 1, paddingHorizontal: scale(10) },
      labelLayout:{ flexDirection: "row", alignItems: "center" },
      requiredStar:{ color: "red", paddingLeft: 2 },
      layout:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
        error: {
            fontSize: moderateScale(12),
            color: colors.red,
            position: 'absolute',
            bottom: -15,
          },
        dropDownheight: {
            maxHeight: verticalScale(120),
          },
          checkbox: {
            height: moderateScale(16),
            width: moderateScale(16),
            borderWidth: 2,
            borderColor: colors.radioBtn,
            marginRight: 8,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: moderateScale(8),
          },
        
          checkmark: {
            width: moderateScale(8),
            height: moderateScale(8),
            borderRadius: moderateScale(4),
            backgroundColor: colors.radioBtn,
          },
          label: {
            fontSize: moderateScale(15),
            color: colors.value,
            paddingVertical: 4,
          },
          input: {
            fontSize: moderateScale(15),
            color: colors.black,
            backgroundColor: colors.input,
            paddingLeft: 15,
            borderRadius: 6,
            height: verticalScale(50),
            justifyContent: 'center',
          },
          inputContainer: {
            marginTop: verticalScale(20),
          },
          dobContainer: {
            backgroundColor: colors.input,
            paddingLeft: 15,
            borderRadius: 6,
            height: verticalScale(45),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingRight: scale(10),
            // justifyContent:"center"
          },
          eye: {
            position: 'absolute',
            // top: verticalScale(42),
            right: 12,
            bottom: verticalScale(12),
            alignSelf: 'flex-end',
          },
          mandSign: {
            color: colors.red,
            paddingLeft: 2,
          },
        layoutStartCenter: {
            justifyContent: 'flex-start',
            alignItems: 'center',
          },
        layoutCenter:{
            justifyContent: 'center',
            alignItems: 'center',
          },
        row:{
            flexDirection:"row"
        },
        layoutBetween:{
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        container: {
            flex: 1,
            paddingHorizontal: moderateScale(16),
        },
        content: {
            flex: 1,
            marginTop: moderateScale(24),
            justifyContent: 'space-between',
        },
        titleSection: {
            marginBottom: moderateScale(32),
        },
        title: {
            fontSize: moderateScale(22),
            marginBottom: moderateScale(12),
            textTransform: 'uppercase',
        },
        signUpPrompt: {
            flexDirection: isRTL ? 'row-reverse' : 'row',
            alignItems: 'center',
            gap: moderateScale(6),
        },
        greyText: {
            fontSize: moderateScale(12),
            color: colors.inputPlaceholder,
        },
        signUpLink: {
            fontSize: moderateScale(12),
            color: commonColors.secondary,
            textDecorationLine: 'underline',
            letterSpacing: 0.5,

        },
        formSection: {
            marginBottom: moderateScale(24),
        },
        inputLabel: {
            fontSize: moderateScale(16),
            marginBottom: moderateScale(10),
        },
        buttonSection: {
            marginBottom: moderateScale(24),
        },
        nextButton: {
            height: moderateScale(48),
            backgroundColor: commonColors.primary,
        },
        termsText: {
            fontSize: moderateScale(12),
            color: colors.inputPlaceholder,
            textAlign: 'center',
        },
        header:{
            paddingHorizontal: 0
        }
    }), [isRTL, theme, colors]); // Dependencies array includes all variables used in the styles
};

export default useRTLStyles;