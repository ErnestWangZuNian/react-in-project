import "./style.scss";
import { PullToRefresh } from "antd-mobile";
class ZPullToReFresh extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: document.documentElement.clientHeight
    };
  }
  componentWillMount() {}
  componentDidMount() {
    const height = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    const props = this.props;
    this.setState({
      height: props.height ? props.height : height
    });
  }
  componentWillReceiveProps() {}
  componentWillUpdate() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    const { data, height } = this.state;
    const props = this.props;
    return (
      <PullToRefresh
        ref={el => (this.ptr = el)}
        direction={"up"}
        style={{ height: height, overflow: "auto" }}
        {...props}
      >
        {props.children}
      </PullToRefresh>
    );
  }
}
export default ZPullToReFresh;
