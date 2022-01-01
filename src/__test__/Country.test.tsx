import { render, screen } from "@testing-library/react";
import React from "react";
import Country from "../Components/Country/Country";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

test("Country test render", () => {
  const history = createMemoryHistory();
  history.push("/country/:name");
  render(
    <Router history={history}>
      <Country />
    </Router>
  );
  const country = screen.getByTestId('country')
  expect(country).toBeInTheDocument()
});
