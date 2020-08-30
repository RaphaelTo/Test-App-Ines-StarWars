import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";

import Navigation from "../../../../components/organisms/Navigation/Navigation";

describe("organisms Navigation", () => {
  test("organisms Navigation exist", () => {
    const getNavigation = render(<Navigation />);

    expect(getNavigation).not.toBeNull();
  });

  test("organism Navigation return  molecule Search", () => {
    const { getByTestId } = render(<Navigation />);
    const getSearchInput = getByTestId("input-test");
    const getSearchLabel = getByTestId("label-id");

    expect(getSearchInput.type).toBe("text");
    expect(getSearchInput.id).toBe("");
    expect(getSearchInput instanceof HTMLInputElement).toBeTruthy();
    expect(getSearchLabel.htmlFor).toBe("valeur par defaut");
    expect(getSearchLabel.textContent).toBe("valeur par defaut");
    expect(getSearchLabel instanceof HTMLLabelElement).toBeTruthy();
  });

  test("organism Navigation take props for Search molecule", () => {
    const { getByTestId } = render(
      <Navigation
        searchInputType="password"
        searchInputId="a"
        searchLabelFor="a"
        searchLabelContent="nom"
      />
    );
    const getSearchInput = getByTestId("input-test");
    const getSearchLabel = getByTestId("label-id");

    expect(getSearchInput.type).toBe("password");
    expect(getSearchInput.id).toBe("a");
    expect(getSearchInput instanceof HTMLInputElement).toBeTruthy();
    expect(getSearchLabel.htmlFor).toBe("a");
    expect(getSearchLabel.textContent).toBe("nom");
    expect(getSearchLabel instanceof HTMLLabelElement).toBeTruthy();
  });

  test("organism Navigation return atom List", () => {
    const { getAllByTestId } = render(<Navigation />);
    const getList = getAllByTestId("li-items").map((item) => item.textContent);

    expect(getList).toEqual(["Value 1", "Value 2", "Value 3"]);
    expect(getAllByTestId("li-items")).toBeTruthy();
  });

  test("organism Navigation take props for atom List", () => {
    const arrayList: Array<string> = ["Nom", "Prenom", "Age"];
    const { getAllByTestId } = render(<Navigation listItems={arrayList} />);
    const getList = getAllByTestId("li-items").map((item) => item.textContent);

    expect(getList).toEqual(arrayList);
    expect(getAllByTestId("li-items")).toBeTruthy();
  });

  test("organism Navigation return atom List, and molecule Search", () => {
    const arrayList: Array<string> = ["Nom", "Prenom", "Age"];
    const { getByTestId, getAllByTestId } = render(
      <Navigation
        placeholder="Veuillez rentrer votre nom"
        listItems={arrayList}
        searchInputType="password"
        searchInputId="a"
        searchLabelFor="a"
        searchLabelContent="nom"
      />
    );
    const getSearchInput = getByTestId("input-test");
    const getSearchLabel = getByTestId("label-id");
    const getList = getAllByTestId("li-items").map((item) => item.textContent);

    expect(getSearchInput.placeholder).toBe("Veuillez rentrer votre nom");
    expect(getList).toEqual(arrayList);
    expect(getAllByTestId("li-items")).toBeTruthy();
    expect(getSearchInput.type).toBe("password");
    expect(getSearchInput.id).toBe("a");
    expect(getSearchInput instanceof HTMLInputElement).toBeTruthy();
    expect(getSearchLabel.htmlFor).toBe("a");
    expect(getSearchLabel.textContent).toBe("nom");
    expect(getSearchLabel instanceof HTMLLabelElement).toBeTruthy();
  });
});
