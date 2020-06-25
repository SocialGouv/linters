/* eslint-disable no-inner-declarations */

import PropTypes from "prop-types";
import React from "react";

// #region plugin:react/recommended
{
  class Hello extends React.Component {
    render() {
      return (
        <div>
          Hello {this.props.firstname} {this.props.lastname}
        </div>
      );
    }
  }
  Hello.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
  };
}
// #endregion

// #region plugin:jsx-a11y/recommended
{
  <input type="image" alt="This is descriptive!" />;
}
// #endregion

// #region plugin:react-hooks/recommended
{
  function RegressionTest() {
    const res = [];
    const additionalCond = true;
    for (let i = 0; i !== 10 && additionalCond; ++i) {
      res.push(i);
    }
    React.useLayoutEffect(() => {});
  }
  RegressionTest;
}
// #endregion
