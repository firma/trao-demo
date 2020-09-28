import React, { Component } from 'react'
import { View } from '@tarojs/components'
import './index.scss'
import {connect } from 'react-redux'

@connect(({ demo }) => ({
    ...demo
}))

class Index extends Component {
  config = {
    navigationBarTitleText: 'demo'
  }
  componentWillMount () { }
  componentDidMount () {
    this.getData();
  }
  getData = () => {
    const { dispatch } = this.props;
    dispatch({type: 'home/getIndex'})
    dispatch({type: 'goods/getGoodsCount'})
  }
  componentWillUnmount () { }

  componentDidShow() {
  }
  componentDidHide () { }

  render () {
    const {demo} = this.props;

    console.log(this.props,"this.props",demo)

    return (
      <View>Home</View>
    )
  }
}

export default Index;
