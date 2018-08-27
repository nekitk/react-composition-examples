export const withNowMixin = {
  getInitialState() {
    return {
      now: new Date()
    };
  },

  interval: null,

  componentDidMount() {
    console.log("mount in mixin");
    this.interval = setInterval(this.updateTime, 1000);
  },

  componentWillUnmount() {
    clearInterval(this.interval);
  },

  updateTime() {
    this.setState({ now: new Date() });
  }
};
