import "./style.scss";
import urlList from "./api.actions";
import { Button } from "antd-mobile";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  componentWillMount() {}
  componentDidMount() {
    Api.get(urlList.list).then(data => {
      console.log(data);
      this.setState({
        data
      });
    });
  }
  componentWillReceiveProps() {}
  componentWillUpdate() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    const { data } = this.state;
    return (
      <div>
        <div styleName="test">111</div>
        <Button type="primary">测试</Button>
      </div>
    );
  }
}
export default About;
