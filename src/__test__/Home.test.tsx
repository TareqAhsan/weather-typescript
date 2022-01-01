import React from 'react'
import { render, screen } from "@testing-library/react"
import Home from "../Components/Home/Home"

test('Home test render', () => {
    render(<Home/>);
    const home = screen.getByTestId('home')
    expect(home).toBeInTheDocument();
})
