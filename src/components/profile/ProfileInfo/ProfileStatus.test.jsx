import React from "react";
import { create } from "react-test-render";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="lol" />);
    const instance = component.getInstance();
    expect(instance.state.text).toBe("lol");
  });
});
