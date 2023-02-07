import React from "react";
import { Combobox } from "@headlessui/react";
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children?: React.ReactNode;
  label?: string;
  required?: boolean;
  helperText?: string;
}

interface SelectOptionsProps {
  children?: React.ReactNode;
}

export function SelectOptions({ children }: SelectOptionsProps) {
  return <Combobox.Options>{children}</Combobox.Options>;
}

interface SelectInputProps {
  onChange?: React.ChangeEvent;
}

export function SelectInput({}: SelectInputProps) {
  return <Combobox.Input as="input"></Combobox.Input>;
}

const Select = ({ children, label, required, helperText }: SelectProps) => {
  return <Combobox></Combobox>;
};

export default Select;
