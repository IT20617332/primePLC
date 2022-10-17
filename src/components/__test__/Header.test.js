import React from "react";
import Header from "../Header";
import {render,fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

test(" Cheack Main Header",()=>{
    const {getByTestId}=render(<Header/>);
    const header=getByTestId("head");
    expect(header.textContent).toBe("To Build To Expand")

 })