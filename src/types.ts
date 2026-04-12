import { TextInputProps, TextStyle, ViewStyle } from "react-native";
import { Dispatch, ReactNode, SetStateAction } from "react";


type ChangeValue = string | string[];

export type HandleChange = (
  value: ChangeValue,
  keyType?: "start" | "end"
) => void;

export type FormErrors = Record<string, string | undefined>;

export type ModalCompProps ={
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
  containerStyle?: ViewStyle;
  backdropOpacity?: number;
  animationDuration?: number;
  theme?: "light" | "dark";
}

// Props for Input fields
export type TextInputType = {
  placeholder?: string;
  inputBoxStyle?: TextStyle;
  value: string;
  handleOnChange:HandleChange;
  inputType: string;
  theme?: "light" | "dark";
  label?: string;
  required?: boolean;
  error?: string;
  // 🔥 NEW (dynamic control)
  labelStyle?: ViewStyle;
  eyeIconProps?: {
    size?: number;
    style?: TextStyle;
  };
  inputProps?:TextInputProps;
  multilineHeight?:number
};

// time Props Type
type TimeRange = {
  start: string;
  end: string;
};

export type TimeFieldProps = {
  option: Option[];
  placeholder?:string;
  // 🔥 supports both single & range
  value: TimeRange;
  handleOnChange:HandleChange;
  mode?: "single" | "range";
  theme?: "light" | "dark";
  inputBoxStyle?: ViewStyle;
  selectedTextStyle?: TextStyle;
  optionStyle?: ViewStyle;
  optionTextStyle?: TextStyle;
  label?: string;
  labelStyle?: ViewStyle;
  required?: boolean;
  error?: string;
};

// Calendar type props

export type CalendarProps = {
  theme: "light" | "dark";
  handleOnChange:HandleChange;
  inputBoxStyle?: ViewStyle;
  dateTextStyle?: TextStyle;
  currentDateStyle?: ViewStyle;
  label?: string;
  labelStyle?: ViewStyle;
  required?: boolean;
  error?: string;
  placeholder?:string
};

// radio field prop type

export type RadioFieldProps = {
  value: string;
  option: Option[];
  handleOnChange:HandleChange;
  inputBoxStyle?: ViewStyle;
  radioBtnStyle?: ViewStyle;
  selectedBtnStyle?: ViewStyle;
  label?: string;
  labelStyle?: ViewStyle;
  required?: boolean;
  error?: string;
  theme?: "light" | "dark";
  placeholder?:string;
  optionLabelStyle?:ViewStyle
};

// Checkbox field props

export type CheckboxProps = {
  value: string[]; // 🔥 array for multi-select
  option: Option[];
  handleOnChange:HandleChange;
  inputBoxStyle?: ViewStyle;
  checkboxStyle?: ViewStyle;
  selectedBoxStyle?: ViewStyle;
  label?: string;
  labelStyle?: ViewStyle;
  required?: boolean;
  error?: string;
  theme?: "light" | "dark";
  placeholder?:string;
  optionLabelStyle?:TextStyle
};
export type Option = { label: string; value: string; id?: string };


export type ComponentPropsMap = {
  input: Partial<TextInputType>;
  multiline: Partial<TextInputType>;
  password: Partial<TextInputType>;
  date: CalendarProps;
  time: TimeFieldProps;
  radio: RadioFieldProps;
  checkbox: CheckboxProps;
};

export type FieldType = keyof ComponentPropsMap;
export type BaseField = {
  label: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  inputProps?:TextInputProps
};

type StrictField = {
  [K in FieldType]: BaseField & {
    type: K;
    componentProps?: ComponentPropsMap[K];
  };
}[FieldType];

// Allow externally constructed configs where `type` is widened to `string`.
// FormBuilder still branches on known field types at runtime.
type LooseField = BaseField & {
  type: string;
  componentProps?: Record<string, any>;
};

export type Fields = StrictField | LooseField;

export type InputState = Record<string, string>;
export type FormValue = string | string[] | Record<string, any>;

export type SetInput = Dispatch<SetStateAction<Record<string, FormValue>>>;
export type InputProps = {
  theme?: "light" | "dark";
  input: Record<string, FormValue>;
  setInput: SetInput;
  labelStyle?: TextStyle;
  containerStyling?: ViewStyle;
  inputStyle?: ViewStyle;
  formError?: Record<string, string | undefined>;
  fields: Fields[];
};
