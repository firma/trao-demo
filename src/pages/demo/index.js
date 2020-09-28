import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({demo}) => ({
  ...demo,
}))
export default class Demo extends Component {
  config = {
    navigationBarTitleText: 'demo',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className="demo-page">
        demo
      </View>
    )
  }
}
