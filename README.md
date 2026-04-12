
# RN Form Kit

An easy-to-use React Native form kit designed to save time by simplifying form creation with dynamic fields and minimal configuration.


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Features

- ⚡ Dynamic form rendering from config
- 🧠 Minimal setup (just state + field name)
- 🎯 Built-in support for multiple field types
  - Input
  - Password
  - Dropdown
  - Radio
  - Checkbox
  - Time (single & range)
- 🎨 Customizable styles
- 🔄 Controlled state handling
- 📱 Optimized for React Native


## Version
1.0.0

## 👨‍💻 Author

- Harish Arora — [@techieharry007](https://github.com/techieharry007)

## Component Props Reference


```http
🔤 Field Type Input: Props (Input / Password / Multiline / Email)
```

| Parameter	| Type	| Description
| :-------- | :------- | :------------------------- |
| `value` | `string` | **Required**. |
| `handleOnChange` | `function` | **Required**. Function to update value. Argumensts includes key,value,type?: start|end
| `inputType` | `string` | **Required**. Type of input (input, password, etc.)|
| `placeholder` | `string` |  Type of input (input, password, etc.)|
| `label` | `string` |  Label shown above input|
| `required` | `boolean` |  Marks field as required |
| `error` | `string` | Error message for each field |
| `theme` | `light | dark` | Theme styling |
| `inputBoxStyle` | `TextStyle` | Custom label style |
| `labelStyle` | `ViewStyle` | Theme styling |
| `multilineHeight` | `number` | Height for multiline input |
| `inputProps` | `TextInputProps` | Native TextInput props |
| `eyeIconProps` | `eyeIconProps` | { size?: number; style?: TextStyle }	Customize password toggle icon |

```http
🔤 Field Type Time: Props (Single / Range)
```

| Parameter	| Type	| Description
| :-------- | :------- | :------------------------- |
| `value` | `string` | **Required**. |
| `handleOnChange` | `function` | **Required**. Function to update value. Argumensts includes key,value,type?: start|end
| `required` | `boolean` |  Marks field as required |
| `mode` | `string` | single or range |
| `placeholder` | `string` |  string|
| `label` | `string` |  Label shown above input|
| `error` | `string` | Error message for each field |
| `theme` | `string` | `light`or `dark` | Theme styling |
| `inputBoxStyle` | `TextStyle` | Custom label style |
| `labelStyle` | `ViewStyle` | Theme styling |
| `selectedTextStyle` | `TextStyle` | Styling selected text |
| `optionStyle` | `ViewStyle` | Styling options container in list |
| `optionTextStyle` | `optionTextStyle` | Styling option text  in list |

```http
🔤 Field Type Radio: Props
```

| Parameter	| Type	| Description
| :-------- | :------- | :------------------------- |
| `value` | `string` | **Required**. |
| `option` | Array of`Object {label:string,value:string}` | **Required**. |
| `handleOnChange` | `function` | **Required**. Function to update value. Argumensts includes key,value
| `required` | `boolean` |  Marks field as required |
| `inputBoxStyle` | `TextStyle` | Custom label style |
| `label` | `string` |  Label shown above input|
| `error` | `string` | Error message for each field |
| `theme` | `string` | `light`or `dark` | Theme styling |
| `labelStyle` | `ViewStyle` | Theme styling |
| `selectedBtnStyle` | `ViewStyle` | Styling selected btn style |
| `radioBtnStyle` | `ViewStyle` | Styling selected radio btn style |
| `optionLabelStyle` | `TextStyle` | Styling selected radio label option style |


```http
🔤 Field Type Checkbox: Props
```

| Parameter	| Type	| Description
| :-------- | :------- | :------------------------- |
| `value` | `string` | **Required**. |
| `option` | Array of`Object {label:string,value:string}` | **Required**. |
| `handleOnChange` | `function` | **Required**. Function to update value. Argumensts includes key,value
| `inputBoxStyle` | `TextStyle` | Custom label style |
| `checkboxStyle` | `ViewStyle` | Styling checkbox btn |
| `selectedBoxStyle` | `ViewStyle` | Styling selected checkbox btn |
| `label` | `string` |  Label shown above input|
| `labelStyle` | `ViewStyle` | Theme styling |
| `required` | `boolean` |  Marks field as required |
| `error` | `string` | Error message for each field |
| `theme` | `string` | `light`or `dark` | Theme styling |
| `optionLabelStyle` | `TextStyle` | Styling selected radio label option style |

```http
🔤 Field Type Date: Props
```

| Parameter	| Type	| Description
| :-------- | :------- | :------------------------- |
| `handleOnChange` | `function` | **Required**. Function to update value. Argumensts includes key,value
| `inputBoxStyle` | `TextStyle` | Custom label style |
| `dateTextStyle` | `TextStyle` | Styling date text |
| `currentDateStyle` | `ViewStyle` | Styling current date |
| `label` | `string` |  Label shown above input|
| `labelStyle` | `ViewStyle` | Theme styling |
| `required` | `boolean` |  Marks field as required |
| `error` | `string` | Error message for each field |
| `theme` | `string` | `light`or `dark` | Theme styling |




## Demo


 
```http
 const testFields = [
  {
    label: "Full Name",
    placeholder: "Enter your name",
    name: "fullName",
    type: "input",
    required: true,
    componentProps: {},
  },
  {
    label: "Email",
    placeholder: "Enter your email",
    name: "email",
    type: "input",
    required: true,
    componentProps: {
      keyboardType: "email-address",
    },
  },
  {
    label: "Address",
    placeholder: "Enter your address",
    name: "address",
    type: "multiline",
    required: false,
    componentProps: {
      numberOfLines: 4,
    },
  },
  {
    label: "Gender",
    name: "gender",
    type: "radio",
    required: true,
    componentProps: {
      option: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Other", value: "other" },
      ],
    },
  },
  {
    label: "Event Time",
    name: "eventTime",
    type: "time",
    required: true,
    componentProps: {
      mode: "range",
    },
  },
  {
    label: "Hobbies",
    name: "hobbies",
    type: "checkbox",
    required: false,
    componentProps: {
      option: [
        { label: "Cricket", value: "cricket" },
        { label: "Music", value: "music" },
        { label: "Travel", value: "travel" },
      ],
    },
  },
  {
    label: "Date of Birth",
    name: "dob",
    type: "date",
    required: true,
    componentProps: {
      mode: "date",
    },
  },
  {
    label: "Start Time",
    name: "startTime",
    type: "time",
    required: true,
    componentProps: {
      mode: "range",
      labelStyle: { color: "blue", paddingVertical: 5 },
      selectedStyle: { backgroundColor: "blue" },
      inputBoxStyle: {},
    },
  },
];
```
```http
export const initialState = {
  fullName: "",
  email: "",
  address: "",
  gender: "",
  hobbies: [], // 🔥 checkbox → array
  dob: "",
  startTime: "", // single time
  eventTime: {
    start: "",
    end: "",
  }, // 🔥 range time
};

```

```http
import FormBuilder from "rn-form-kit;
const MyForm=()=>{
const [input, setInput] = useState(initialState);
const [error,setError]=useState({})
return (
 <ScrollView
              style={{
                flexGrow: 1,
                height: "100%",
                marginBottom: verticalScale(100),
                paddingHorizontal: 10,
              }}
              nestedScrollEnabled
            >
              <FormBuilder
                input={input}
                fields={testFields}
                setInput={setInput}
                formError={error} // optional
              />
            </ScrollView>)
}
// You can pass error as same key value pairs as input fields name


```


