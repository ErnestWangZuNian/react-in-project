import "./style.scss";
import urlList from "./api.actions";
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
        {data ? <div styleName="about-container">{data.status}</div> : null}
      </div>
    );
  }
}
export default About;
