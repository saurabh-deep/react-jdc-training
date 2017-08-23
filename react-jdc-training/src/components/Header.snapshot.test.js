import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Header from "./Header";

describe("Header", () => {
  const headerText = "Testing header component text";
  const clickHandler = jest.fn();

  it("should render properly", () => {
    const wrapper = shallow(
      <Header title={headerText} />
    );

    expect(shallowToJson(wrapper)).toMatchSnapshot();
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