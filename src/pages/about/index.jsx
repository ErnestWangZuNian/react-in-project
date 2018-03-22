import React from "react";
import "./style.scss";
import urlList from "./api.actions";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    Api.all([urlList.list, urlList.lis]).then(datas => {
      console.log(datas);
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
    return (
      <div>
        <div styleName="about-container test">Hello,I am about;</div>;
        <div styleName="red2">111</div>
      </div>
    );
  }
}
export default About;
