import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header", () => {
  const headerText = "Testing header component text";
  const clickHandler = jest.fn();

  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Header title={headerText} />
      , div
    );
  });

  it("should render properly", () => {
    const wrapper = shallow(
      <Header title={headerText} />
    );

    const div = wrapper.find(".App-header");
    expect(div.text()).toBe(headerText);

    const img = div.find("img");
    expect(img.hasClass("App-logo")).toEqual(true);
  });

  it("should handle a click event", () => {
    const wrapper = shallow(
      <Header title={headerText} onHeaderClick={clickHandler} />
    );
    const anchor = wrapper.find("#logo");
    anchor.simulate("click");
    expect(clickHandler).toHaveBeenCalled();
  });
});
