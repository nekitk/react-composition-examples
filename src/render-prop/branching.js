import * as React from "react";
import PropTypes from "prop-types";

export class WaitForData extends React.Component {
  static propTypes = {
    promise: PropTypes.object,
    renderLoading: PropTypes.func.isRequired,
    renderSuccess: PropTypes.func.isRequired,
    renderFail: PropTypes.func.isRequired
  };

  state = {
    data: undefined,
    error: undefined
  };

  componentDidMount() {
    this.props.promise
      .then(data => this.setState({ data }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { data, error } = this.state;

    if (data) {
      return this.renderSuccess(data);
    }

    if (error) {
      return this.renderFail(error);
    }

    return this.renderLoading();
  }
}
