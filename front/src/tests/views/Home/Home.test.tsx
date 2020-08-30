import React from "react";
import axios, { AxiosResponse } from "axios";
import { mocked } from "ts-jest/dist/util/testing";
import { render, waitForElement } from "@testing-library/react";
import Home from "../../../views/Home/Home";

jest.mock("axios");
const mockedAxios = mocked(axios, true);

describe("view Home", () => {
  test("view Home rendered", () => {
    const mockResult: AxiosResponse = {
      config: {},
      headers: {},
      request: undefined,
      status: 200,
      statusText: "OK",
      data: {
        result: [
          {
            name: "Leia Organa",
            height: "150",
            mass: "49",
          },
        ],
      },
    };
    mockedAxios.get.mockResolvedValue(mockResult);
    const getHome = render(<Home />);

    expect(getHome).toBeTruthy();
  });

  test("view Home rendered PeopleFetch", async () => {
    const mockResult: AxiosResponse = {
      config: {},
      headers: {},
      request: undefined,
      status: 200,
      statusText: "OK",
      data: {
        result: [
          {
            name: "Leia Organa",
            height: "150",
            mass: "49",
          },
        ],
      },
    };
    mockedAxios.get.mockResolvedValue(mockResult);

    const { getByTestId, getAllByTestId } = render(<Home />);

    const getLoaderPeople = getByTestId("loadPeople-test");
    expect(getLoaderPeople.textContent).toBe("0 people trouvé");

    await waitForElement(() => getAllByTestId("getPeople-test"));

    const getPeople = getAllByTestId("people-test").map(
      (people) => people.textContent
    );
    expect(getPeople).toEqual(["Leia Organa", "150", "49"]);
  });
});
