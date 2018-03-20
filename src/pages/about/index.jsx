import React from "react";
import styles from "./style.scss";
import urlList from "./api.actions";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    Api.get(urlList.list).then(res => {});
    Api.all([Api.get(urlList.list), Api.get(urlList.categoryList)]).then(
      res => {
        console.log(res);
      }
    );
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
