import React, { useRef, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Input } from 'react-native-elements';
import colors from '../../constants/colors';

interface Props {
  type: string;
  input: any;
  setInput: React.Dispatch<React.SetStateAction<any>>;
  handleInputChange: (value: string) => void;
  placeholder: string;
}

export default function CustomInput({
  type,
  input,
  handleInputChange,
  setInput,
  placeholder,
}: Props) {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputRef = useRef(null);

  const onChange = (t: any) => {
    setInput(t);
  };

  return (
    <Input
      keyboardType={type === 'text' ? 'default' : 'numeric'}
      autoCapitalize="none"
      ref={inputRef}
      value={input}
      onChangeText={onChange}
      onFocus={() => {
        setIsInputFocused(true);
      }}
      onBlur={() => {
        setIsInputFocused(false);
      }}
      placeholder={placeholder}
      inputStyle={[
        styles.input,
        Platform.OS === 'ios' && { fontWeight: '400' },
        { fontSize: 15 },
      ]}
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    fontFamily: 'Figtree-Regular',
    height: '100%',
    backgroundColor: 'transparent',
    color: colors.MAIN_2,
    borderWidth: 1,
    borderColor: '#c1c1c1',
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  container: {
    backgroundColor: 'white',
    height: 36,
    borderRadius: 20,
  },
  inputContainer: {
    borderColor: 'transparent',
  },
});
