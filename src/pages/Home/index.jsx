import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchHomeMultidataAction } from "../../store/home/action";

export class Category extends PureComponent {
  componentDidMount() {
    // 组件可以通过props拿到传递的redux的state和派发函数
    this.props.fetchHomeMultidata();
  }

  render() {
    const { counter, banners } = this.props;
    return (
      <div>
        <h2>Category Page: {counter}</h2>
        <div>
          {banners.map((item) => {
            return (
              <img src={item.image} key={item.acm} width={100} height={100} />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  banners: state.home.banners,
});

const mapDispatchToProps = (dispatch) => ({
  fetchHomeMultidata() {
    dispatch(fetchHomeMultidataAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
