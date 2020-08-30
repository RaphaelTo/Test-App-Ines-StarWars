import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";

import People from "../../../../components/atoms/People/People";

describe("atom People", () => {
  test("atom people exist", () => {
    const getPeople = render(<People />);

    expect(getPeople).toBeTruthy();
  });

  test("atom people return people Star wars", () => {
    const peoples: Array<any> = [
      {
        films: [
          "http://swapi.dev/api/films/1/",
          "http://swapi.dev/api/films/2/",
          "http://swapi.dev/api/films/3/",
          "http://swapi.dev/api/films/6/",
        ],
        species: [],
        starships: [],
        vehicles: ["http://swapi.dev/api/vehicles/30/"],
        _id: "5f484887a4fd249f22000234",
        name: "Leia Organa",
        height: "150",
        mass: "49",
        hair_color: "brown",
        skin_color: "light",
        eye_color: "brown",
        birth_year: "19BBY",
        gender: "female",
        homeworld: "http://swapi.dev/api/planets/2/",
        created: "2014-12-10T15:20:09.791000Z",
        edited: "2014-12-20T21:17:50.315000Z",
        url: "http://swapi.dev/api/people/5/",
      },
    ];

    const { getAllByTestId } = render(<People peoples={peoples} />);

    const getPeople = getAllByTestId("people-test").map(
      (element) => element.textContent
    );

    expect(getPeople).toEqual(["Leia Organa", "150", "49"]);
  });

  test("atom people have default value", () => {
    const { getAllByTestId } = render(<People />);

    const getPeople = getAllByTestId("people-test").map(
      (element) => element.textContent
    );

    expect(getPeople).toEqual([
      "Default name",
      "Default height",
      "Default mass",
    ]);
  });
});
