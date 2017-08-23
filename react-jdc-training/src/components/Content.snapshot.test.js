import React from "react";
import renderer from 'react-test-renderer';
import Content from "./Content";

describe("Content", () => {
  const contentText = "Testing content component text";

  it("properly shows given text", () => {
    const rendered = renderer.create(
      <Content text={contentText} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});