import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Content from "../../../../components/templates/Content/Content";

describe("template Content", () => {
  test("template Content exist", () => {
    const getContent = render(<Content />);

    expect(getContent).toBeTruthy();
  });

  test("template Content have to return People", () => {
    const peoples: Array<object> = [
      { name: "Raphael", height: "78kg", mass: "100" },
    ];
    const { getAllByTestId } = render(<Content peoples={peoples} />);

    const getPeoples = getAllByTestId("people-test").map(
      (people) => people.textContent
    );

    expect(
      getAllByTestId("people-test")[0] instanceof HTMLParagraphElement
    ).toBeTruthy();
    expect(getPeoples).toEqual(["Raphael", "78kg", "100"]);
  });

  test('template Content dont need to give props "peoples"', () => {
    const { getAllByTestId } = render(<Content />);

    const getPeoples = getAllByTestId("people-test").map(
      (people) => people.textContent
    );

    expect(getPeoples).toEqual([
      "Default name",
      "Default height",
      "Default mass",
    ]);
  });

  test("template Content return atom Button", () => {
    const { getByTestId } = render(
      <Content activateButton={true} nameButton="Raphael le bg" />
    );

    const getButton = getByTestId("button-test");

    expect(getButton instanceof HTMLButtonElement).toBeTruthy();
    expect(getButton).toHaveTextContent("Raphael le bg");
  });

  test("template Content return atom Button less props", () => {
    const { getByTestId } = render(<Content activateButton={true} />);

    const getButton = getByTestId("button-test");

    expect(getButton).toHaveTextContent("Valider");
  });

  test("template Content return atom Button and add props onClickButton and try to click", () => {
    const { getByTestId } = render(
      <Content
        activateButton={true}
        onClickButton={() =>
          (getByTestId("button-test").textContent = "clicked")
        }
      />
    );

    const getButton = getByTestId("button-test");
    fireEvent.click(getButton);

    expect(getButton).toHaveTextContent("clicked");
    expect(fireEvent.click(getButton)).toBeTruthy();
  });

  test("template Content return atoms Button and People", () => {
    const { getByTestId, getAllByTestId } = render(<Content />);

    const getButton = getByTestId("button-test");
    const getPeople = getAllByTestId("people-test");

    expect(getButton instanceof HTMLButtonElement).toBeTruthy();
    expect(getPeople[0] instanceof HTMLParagraphElement).toBeTruthy();
  });

  test("template Content disabled button", () => {
    const { getByTestId } = render(<Content activateButton={false} />);

    const getButton = getByTestId("content-button");

    expect(getButton).toHaveTextContent("Plus rien à charger");
  });
});
