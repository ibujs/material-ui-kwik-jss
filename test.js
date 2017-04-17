// @flow
/*  eslint-env node */
import test from "ava";
// import React from "react";
// import { shallow } from "enzyme";

test("Babel compiles?", (t) => {
  const testRestSpread = { test: 1, test2: 2, test3: 3 };
  const testRestSpread2 = { ...testRestSpread, test4: 4 };
  t.is(testRestSpread2, { test: 1, test2: 2, test3: 3, test4: 4 });
});
