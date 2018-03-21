import React from "react";
import styles from "./style.scss";
import urlList from "./api.actions";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    Api.get(urlList.list).then(res => {
      console.log(res.data);
    });
    Api.post(urlList.borrow, { book_id: "1", pre_return_at: "2017-10-1" }).then(
      res => {}
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
