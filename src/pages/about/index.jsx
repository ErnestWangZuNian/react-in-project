import React from "react";
import styles from "./style.scss";
import Api from "../../api/index.jsx";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    let api = new Api();
    api.get("/v1/book/list").then(res => {
      console.log(res.data);
    });
  }
  componentDidMount() {}
  componentWillReceiveProps() {}
  componentWillUpdate() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return <div className="about-container">Hello,I am about;</div>;
  }
}
export default About;
