export const withNow = (accuracyInMs = 1000) => Component => {
  return class WithNow extends Component {
    constructor(props) {
      super(props);

      this.state = {
        ...this.state,
        now: new Date()
      };
    }

    interval;

    componentDidMount() {
      super.componentDidMount();
      this.interval = setInterval(this.updateTime, accuracyInMs);
    }

    componentWillUnmount() {
      super.componentWillUnmount();
      clearInterval(this.interval);
    }

    updateTime = () => {
      this.setState({ now: new Date() });
    };
  };
};
