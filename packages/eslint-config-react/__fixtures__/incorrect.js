/* eslint-disable no-inner-declarations */

import React, { useState } from "react";

// #region @socialgouv/eslint-config-recommended
{
  console.log({ b: "b", a: "a", c: "c" });
}
// #endregion

// #region plugin:react/recommended
{
  class Hello extends React.Component {
    render() {
      return <div>Hello {this.props.name}</div>;
    }
  }
  Hello;
}
// #endregion

// #region plugin:jsx-a11y/recommended
{
  <img src="foo" />;
}
// #endregion

// #region plugin:react-hooks/recommended
{
  function ComponentWithHookInsideCallback() {
    function handleClick() {
      useState();
    }
    return <button onClick={handleClick()}>Hello</button>;
  }
  ComponentWithHookInsideCallback;
}
// #endregion
