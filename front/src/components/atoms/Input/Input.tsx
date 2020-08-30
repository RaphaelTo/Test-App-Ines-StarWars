import React from "react";

interface IPropsInput {
  type?: string;
  id?: string;
  [index: string]: any;
  onChangeInput: any;
}

const Input: React.FunctionComponent<IPropsInput> = ({
  type = "text",
  id,
  onChangeInput,
  ...props
}) => (
  <input
    onChange={onChangeInput}
    type={type}
    id={id}
    {...props}
    data-testid="input-test"
  />
);

export default Input;
