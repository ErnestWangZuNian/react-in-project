import "./style.scss";
import { Button, SearchBar, TabBar } from "antd-mobile";
import ZPullToReFresh from "@/component/zpulltorefresh";
import url from "./api.action";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 1,
      totalPage: 1
    };
  }
  componentWillMount() {}
  componentDidMount() {
    this.setState({
      height:
        document.documentElement.clientHeight -
        ReactDOM.findDOMNode(this.tabBar).clientHeight -
        ReactDOM.findDOMNode(this.manualFocusInst).clientHeight
    });
    this.getDataList();
  }
  componentWillReceiveProps() {}
  componentWillUpdate() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  getDataList = (page = 1) => {
    let { data } = this.state;
    Api.get(url.list, { page: page }).then(res => {
      this.setState({
        data: data.concat(res.data.data),
        totalPage: res.data.last_page,
        page: res.data.current_page
      });
    });
  };
  upDataList = () => {
    let { page, totalPage } = this.state;
    if (page < totalPage) {
      ++page;
      this.getDataList(page);
    }
  };
  render() {
    const { data, height } = this.state;
    return (
      <div styleName="home-container">
        <SearchBar
          placeholder="请输入图书名称"
          ref={ref => (this.manualFocusInst = ref)}
        />
        <div styleName="content">
          <ZPullToReFresh
            onRefresh={this.upDataList}
            style={{ height, overflow: "auto" }}
          >
            {data.map(item => (
              <div key={item.id} style={{ textAlign: "center", padding: 20 }}>
                {item.name}
              </div>
            ))}
          </ZPullToReFresh>
        </div>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
          ref={tabBar => (this.tabBar = tabBar)}
        >
          <TabBar.Item
            title="Life"
            key="Life"
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
          />
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            title="Koubei"
            key="Koubei"
            badge={1}
          />
        </TabBar>
      </div>
    );
  }
}
export default App;
