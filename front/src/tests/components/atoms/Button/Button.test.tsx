import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Button from "../../../../components/atoms/Button/Button";

describe("atom Button", () => {
  test("atom Button exist", () => {
    const getButton = render(<Button />);

    expect(getButton).not.toBeNull();
  });

  test("atom Button get a name for button", () => {
    const { getByTestId } = render(<Button name="Load more ..." />);

    const getButton = getByTestId("button-test");

    expect(getButton instanceof HTMLButtonElement).toBeTruthy();
    expect(getButton).toHaveTextContent("Load more ...");
  });

  test("atom Button have default value for button", () => {
    const { getByTestId } = render(<Button />);

    const getButton = getByTestId("button-test");

    expect(getButton).toHaveTextContent("Valider");
  });

  test("atom Button can give an function and click", () => {
    const { getByTestId } = render(
      <Button
        onClickButton={() => (getByTestId("button-test").textContent = "lol")}
      />
    );

    const getButton = getByTestId("button-test");
    fireEvent.click(getButton);

    expect(fireEvent.click(getButton)).toBeTruthy();
    expect(getButton).toHaveTextContent("lol");
  });
});
