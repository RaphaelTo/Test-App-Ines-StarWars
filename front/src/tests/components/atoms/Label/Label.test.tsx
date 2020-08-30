import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import Label from "../../../../components/atoms/Label/Label";

describe("component input", () => {
  test("renders atom label", () => {
    const inputComponent = render(<Label />);
    expect(inputComponent).toBeTruthy();
  });

  test("atom label is label tag", () => {
    const { getByTestId } = render(<Label />);

    const getElement = getByTestId("label-id");

    expect(getElement instanceof HTMLLabelElement).toBeTruthy();
  });

  test("atom label can have for and content to display", () => {
    const { getByTestId } = render(
      <Label htmlFor="id-input" content="Nom :" />
    );

    const getElement = getByTestId("label-id");

    expect(getElement.htmlFor).toBe("id-input");
    expect(getElement).toHaveTextContent("Nom :");
  });

  test("atom label have default value", () => {
    const { getByTestId } = render(<Label />);

    const getElement = getByTestId("label-id");

    expect(getElement.htmlFor).toBe("valeur par defaut");
    expect(getElement).toHaveTextContent("valeur par defaut");
  });
});
