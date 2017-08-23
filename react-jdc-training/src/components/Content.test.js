import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Content from "./Content";

describe("Content", () => {
  const contentText = "Testing content component text";

  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Content text={contentText} />
      , div
    );
  });

  it("properly shows given text", () => {
    const wrapper = shallow(
      <Content text={contentText} />
    );
    const p = wrapper.find(".App-intro");
    expect(p.text()).toBe(contentText);
  });
});