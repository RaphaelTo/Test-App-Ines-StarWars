import React from "react";

interface IPropsButton {
  name?: string;
  onClickButton?: any;
}

const Button: React.FunctionComponent<IPropsButton> = ({
  name = "Valider",
  onClickButton,
}) => {
  return (
    <button onClick={onClickButton} data-testid="button-test">
      {name}
    </button>
  );
};

export default Button;
