import * as React from "react";
import * as R from "ramda";
import { withNow } from "./with-now";
import { withWidth } from "./with-width";

const Test = () => null;

const spaghetti = withNow()(withWidth(Test));

const chained = R.pipe(
  withNow(),
  withWidth
)(Test);

// Classes only
@withNow(5000)
@withWidth
// @withRouter
// @connect(state => { a: state.a })
class Decorated extends React.Component {}
